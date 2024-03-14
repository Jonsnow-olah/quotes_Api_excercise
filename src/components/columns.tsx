"use client"

import { ColumnDef } from "@tanstack/react-table"

import { ArrowUpDown, MoreHorizontal } from "lucide-react"

import { Button } from "./button"



interface Quote {
  _id: string;
  content: string;
  author: string;
  dateAdded: string;

}


export const columns: ColumnDef<Quote>[] = [
  {
    accessorKey: "_id",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Id
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
    },

  {
    accessorKey: "author",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Author
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
    },
  
  {
    accessorKey: "content",
    header: "Quotes",
  },
  {
    accessorKey: "dateAdded",
    header: "Date Added",
  },
  
  
]
