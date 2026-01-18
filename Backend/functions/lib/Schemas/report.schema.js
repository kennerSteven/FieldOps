"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reportSchema = void 0;
const zod_1 = require("zod");
exports.reportSchema = zod_1.z.object({
    Description: zod_1.z.string().min(5),
    Priority: zod_1.z.enum(["alta", "media", "baja"]),
    Localitation: zod_1.z.object({
        latitude: zod_1.z.number(),
        longitude: zod_1.z.number(),
    }),
    img: zod_1.z.array(zod_1.z.object({
        uri: zod_1.z.string().url().or(zod_1.z.string().startsWith("file://"))
    })).min(1).max(3),
});
