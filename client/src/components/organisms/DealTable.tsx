import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import LinkAContact from "../molecules/LinkAContact";
import { useAuth } from "@/hooks";

const DealTable = () => {
  const [searchTerm, setSearchTerm] = useState("");

  interface Deal {
    id: string;
    archived: boolean;
    createdAt: string;
    associations?: {
      [key: string]: {
        results: {
          id: string;
          type: string;
        }[];
      };
    };
  }

  const [deals, setDeals] = useState<Deal[]>([]);
  const { token } = useAuth();

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://127.0.0.1:4040/api/crm/daels/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      setDeals(data);
    };

    getData();
  }, [token]);

  const filteredData = deals.filter((item) =>
    item.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card className="shadow-none">
      <CardHeader>
        <CardTitle>Data Table</CardTitle>
        <CardDescription>
          View data fetched from the API with filtering capabilities.
        </CardDescription>

        <div className="w-full pt-4 flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
          <div className="flex items-center gap-2">
            <Input
              placeholder="Filter by ID"
              className="shadow-none h-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button
              size={"sm"}
              className={"flex items-center gap-2 border-dashed"}
              variant={"outline"}
            >
              <span>Status</span>
            </Button>
            <Button
              size={"sm"}
              className={"flex items-center gap-2 border-dashed"}
              variant={"outline"}
            >
              <span>Priority</span>
            </Button>
          </div>
          <LinkAContact />
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Archived</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead>First Association ID</TableHead>
              <TableHead>First Association Type</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.map((item, index) => {
              const firstAssociation =
                Object.values(item.associations || {})[0]?.results?.[0] || {};

              return (
                <TableRow key={index}>
                  <TableCell className="font-medium">{item.id}</TableCell>
                  <TableCell>{item.archived ? "Yes" : "No"}</TableCell>
                  <TableCell>
                    {new Date(item.createdAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell>{firstAssociation.id || "N/A"}</TableCell>
                  <TableCell>{firstAssociation.type || "N/A"}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default DealTable;