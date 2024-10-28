import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import User from "../models/userModel";
import bcrypt from "bcrypt";
import { TOKEN_SECRET } from "../utils/config";


export const loginUser = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      res.status(401).json({ message: "Invalid credentials" });
      return;
    }

    // Verificar la contraseña encriptada
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(401).json({ message: "Invalid credentials" });
      return;
    }

    const token = jwt.sign(
      { id: user.id, username: user.username, role: user.role },
      TOKEN_SECRET as string,
      { expiresIn: "1h" } // El token expira en 1 hora
    );

    res.json({ token });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error logging in:", error.message);
      res.status(500).json({
        error: "An error occurred while logging in. Please try again later.",
        details: error.message,
      });
    }
  }
};