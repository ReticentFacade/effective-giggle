// import { PrismaClient } from "@prisma/client";

// let prisma: PrismaClient;

// if (process.env.NODE_ENV === "development") {
//   prisma = new PrismaClient();
// } else {
//   if (!global.prisma) {
//     global.prisma = new PrismaClient();
//   }
//   prisma = global.prisma;
// }

// export { prisma };

// ================================================================

import { PrismaClient } from "@prisma/client";

let prisma;

if (process.env.NODE_ENV === "development") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

(async () => {
  await prisma.$connect(); // Ensure that the Prisma client is connected
})();

export { prisma };
// module.exports = prisma; // Export the Prisma instance
