import type { SystemLog } from "@prisma/client";
import type { ColumnDef, Row } from "@tanstack/vue-table";

const dayjs = useDayjs()

export const columns: ColumnDef<SystemLog>[] = [
  {
    accessorKey: "createdAt",
    header: "时间",
    cell: ({ row }) => h("div", { class: "w-50" }, dayjs(row.getValue("createdAt")).format("YYYY-MM-DD HH:mm:ss")),
  },
  {
    accessorKey: "module",
    header: "模块",
    cell: ({ row }) => h("div", { class: "w-50" }, row.getValue("module")),
  },
  {
    accessorKey: "action",
    header: "操作",
    cell: ({ row }) => h("div", { class: "w-50" }, row.getValue("action")),
  },
  {
    accessorKey: "userId",
    header: "用户",
    cell: ({ row }) => h("div", { class: "w-5" }, ''),
  },
  {
    accessorKey: "detail",
    header: "详情",
    cell: ({ row }) => {
      const details =
        typeof row.getValue("detail") === "string"
          ? JSON.parse(row.getValue("detail"))
          : row.getValue("detail");
      return h("div", { class: "max-w-[500px] truncate" }, details);
    },
  },
  {
    id: "actions",
    cell: ({ row }) =>
      h(
        "Button",
        { class: "w-25", variant: "ghost", size: "sm" },
        "查看详情"
      ),
  },
];

