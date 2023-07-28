import User from '../models/User.js';
import bcrypt from "bcrypt";

async function createAdminUser() {
  try {
    const hashedPassword = await bcrypt.hash('password', 10);

    const adminUser = await User.create({
      roleId: 1,
      username: 'admin',
      email: 'admin123@gmail.com',
      password: hashedPassword, 
      isAdmin: true, // or use roles if you have a separate table for roles
    });
    console.log('Admin user created successfully:', adminUser);
  } catch (error) {
    console.error('Error creating admin user:', error);
  }
}

createAdminUser();

export default createAdminUser;