import User from '../models/User.js';

async function createAdminUser() {
  try {
    const adminUser = await User.create({
      roleId: 1,
      username: 'admin',
      email: 'admin123@gmail.com',
      password: 'password', 
      isAdmin: true, // or use roles if you have a separate table for roles
    });
    console.log('Admin user created successfully:', adminUser);
  } catch (error) {
    console.error('Error creating admin user:', error);
  }
}

createAdminUser();

export default createAdminUser;