import { type User, type SystemLog } from "@prisma/client";
import type { ColumnDef, Row } from "@tanstack/vue-table";
import type { SystemLogWithRelations } from "~/prisma/generated/zod";
import DataTableRowActions from "./DataTableRowActions.vue";
const dayjs = useDayjs()

export const columns: ColumnDef<SystemLogWithRelations>[] = [
  {
    accessorKey: "createdAt",
    header: () => h("div", { class: "text-center" }, "时间"),
    cell: ({ row }) => h("div", { class: "w-22" }, dayjs(row.getValue("createdAt")).format("YYYY-MM-DD HH:mm:ss")),
  },
  {
    accessorKey: "module",
    header: () => h("div", { class: "text-center" }, "模块"),
    cell: ({ row }) => h("div", { class: "w-30" }, row.getValue("module")),
  },
  {
    accessorKey: "action",
    header: () => h("div", { class: "text-center" }, "操作"),
    cell: ({ row }) => h("div", { class: "w-50" }, row.getValue("action")),
  },
  {
    accessorKey: "user",
    header: () => h("div", { class: "text-center" }, "用户"),
    cell: ({ row }) => h("div", { class: "w-50" }, row.getValue<User>("user").name ?? ''),
  },
  {
    id: "actions",
    header: () => h("div", { class: "text-center" }, "操作"),
    cell: ({ row }) => h(DataTableRowActions, { row }),
  },
];
