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
import LinkADealDialog from "../molecules/LinkADealDialog";
import { useAuth } from "@/hooks";

const ContactTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [contacts, setContacts] = useState([
    {
      associations: null,
      created_at: "2024-12-05T12:59:48.483000Z",
      archived: false,
      archived_at: null,
      properties_with_history: null,
      id: "82448428689",
      properties: {
        createdate: "2024-12-05T12:59:48.483Z",
        email: "isabella@example.com",
        firstname: "Isabella",
        hs_object_id: "82448428689",
        lastmodifieddate: "2024-12-05T13:01:19.240Z",
        lastname: "Lopez",
        phone: null,
        company: null,
        website: null,
        lifecyclestage: null,
      },
      updated_at: "2024-12-05T13:01:19.240000Z",
    },
  ]);

  const {token} = useAuth();

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://127.0.0.1:4040/api/crm/contacts/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      setContacts(data?.contacts);
    };

    getData();
  }, [token]);

  const filteredContacts = contacts.filter((contact) =>
    [
      contact.properties.firstname?.toLowerCase(),
      contact.properties.lastname?.toLowerCase(),
      contact.properties.email?.toLowerCase(),
    ].some((field) => field?.includes(searchTerm.toLowerCase()))
  );

  return (
    <Card className="shadow-none">
      <CardHeader>
        <CardTitle>Contacts</CardTitle>
        <CardDescription>
          Manage your contacts efficiently with our CRM. Keep track of all your
          interactions and stay organized with HubSpot integration.
        </CardDescription>

        <div className="w-full pt-4 flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
          <div className="flex items-center gap-2">
            <Input
              placeholder="Filter contacts"
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
          <LinkADealDialog />
        </div>
      </CardHeader>

      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Email</TableHead>
              <TableHead>First Name</TableHead>
              <TableHead>Last Name</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Website</TableHead>
              <TableHead>Lifecycle Stage</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredContacts.map((contact) => (
              <TableRow key={contact.id}>
                <TableCell className="font-medium">
                  {contact.properties.email}
                </TableCell>
                <TableCell>{contact.properties.firstname}</TableCell>
                <TableCell>{contact.properties.lastname}</TableCell>
                <TableCell>{contact.properties.phone || "N/A"}</TableCell>
                <TableCell>{contact.properties.company || "N/A"}</TableCell>
                <TableCell>{contact.properties.website || "N/A"}</TableCell>
                <TableCell>
                  {contact.properties.lifecyclestage || "N/A"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default ContactTable;
