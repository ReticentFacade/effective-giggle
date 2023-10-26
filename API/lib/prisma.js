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

import { PrismaClient } from '@prisma/client';

let prisma;

console.log("CHECKING API/lib/prisma.js");
if (process.env.NODE_ENV === "development") {
  console.log("Still checking... 'if' statement");
  prisma = new PrismaClient();
} else {
  console.log("Still checking... 'else' statement");
  if (!global.prisma) {
    console.log("Still checking... 'else' statement: 'if' statement");
    global.prisma = new PrismaClient();
  }
  console.log("Still checking...");
  prisma = global.prisma;
  console.log("Still checking... 'else' statement: 'else' statement");
}

console.log("Still checking... await prisma.$connect();");
(async () => {
  console.log("Still checking... await prisma.$connect();");
  await prisma.$connect(); // Ensure that the Prisma client is connected
})();

export { prisma };
// module.exports = prisma; // Export the Prisma instance
