import Role from '../models/Role.js';

async function addSellerRole() {
    try {
        const sellerRole = await Role.create({
            roleId: 3,
            name: 'seller',
        });
        console.log("Seller role created successfully:", sellerRole);
    } catch (err) {
        console.error('Error creating seller role:', err);
    }
};

export default addSellerRole;