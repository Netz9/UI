'use client';
import { Button } from "@/components/ui/button"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { SVGProps } from 'react';

export function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gradient-to-r from-blue-100 to-purple-100">
      <aside className="sticky top-0 h-screen w-56 bg-white text-gray-800 p-4 border-r border-gray-300 shadow-lg">
        <div className="flex items-center mb-4 space-x-1">
          <img
            src="/acme2.png"
            width="200"
            height="60"
            alt="Company Logo"
            style={{ aspectRatio: "200/60", objectFit: "cover" }}
          />
        </div>
        <nav className="space-y-2">
          <button className="w-full flex items-center space-x-2 hover:bg-gray-100 active:bg-gray-200 py-2 px-2 rounded-lg text-gray-500">
            <HomeIcon className="w-4 h-4" />
            <span className="text-sm font-medium">Home</span>
          </button>
          <button className="w-full flex items-center space-x-2 bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-800">
            <WalletIcon className="w-4 h-4" />
            <span className="text-sm font-medium">Transactions</span>
          </button>
          <button className="w-full flex items-center space-x-2 hover:bg-gray-100 active:bg-gray-200 py-2 px-2 rounded-lg text-gray-500">
            <UsersIcon className="w-4 h-4" />
            <span className="text-sm font-medium">Accounts</span>
          </button>
          <button className="w-full flex items-center space-x-2 hover:bg-gray-100 active:bg-gray-200 py-2 px-2 rounded-lg text-gray-500">
            <TicketIcon className="w-4 h-4" />
            <span className="text-sm font-medium">Tax</span>
          </button>
        </nav>
      </aside>
      <main className="flex-grow p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold text-gray-800">Transactions</h1>
          <Button
            type="button"
            className="px-3 py-2 bg-purple-600 text-white rounded-lg flex items-center space-x-2 text-sm shadow-md hover:bg-purple-700"
          >
            <DownloadIcon className="w-4 h-4" />
            <span>Download</span>
          </Button>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Category</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead />
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Mar 12</TableCell>
                <TableCell>WeWork</TableCell>
                <TableCell>
                  <span className="px-2 py-1 custom-green-bg rounded-md">
                    <TagIcon className="w-4 h-4 inline-block mr-1" />
                    Office
                  </span>
                </TableCell>
                <TableCell className="text-right">$175.00</TableCell>
                <TableCell>
                  <Popover>
                    <PopoverTrigger>
                      <span
                        className="px-2 py-1 bg-transparent text-black hover:bg-gray-200 active:bg-gray-300 rounded cursor-pointer"
                      >
                        <MoveVerticalIcon className="w-4 h-4" />
                      </span>
                    </PopoverTrigger>
                    <PopoverContent className="w-40">
                      <div className="space-y-1">
                        <button className="w-full flex items-center space-x-2 hover:bg-gray-100 active:bg-gray-200 py-2 px-2 rounded-lg text-gray-500">
                          <FilePenIcon className="w-4 h-4" />
                          <span className="text-sm font-medium">Edit</span>
                        </button>
                        <button className="w-full flex items-center space-x-2 hover:bg-gray-100 active:bg-gray-200 py-2 px-2 rounded-lg text-gray-500">
                          <ShareIcon className="w-4 h-4" />
                          <span className="text-sm font-medium">Share</span>
                        </button>
                        <button className="w-full flex items-center space-x-2 hover:bg-gray-100 active:bg-gray-200 py-2 px-2 rounded-lg text-gray-500">
                          <DeleteIcon className="w-4 h-4" />
                          <span className="text-sm font-medium">Delete</span>
                        </button>
                      </div>
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
              {/* Repeat for other rows */}
            </TableBody>
          </Table>
        </div>
      </main>
    </div>
  )
}



function DeleteIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
    </svg>
  );
}

function DownloadIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  );
}

function FilePenIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>
  );
}

function HomeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function MoveVerticalIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="8 18 12 22 16 18" />
      <polyline points="8 6 12 2 16 6" />
      <line x1="12" x2="12" y1="2" y2="22" />
    </svg>
  );
}

function ShareIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  );
}

function TagIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
    </svg>
  );
}

function TicketIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M13 5v2" />
      <path d="M13 17v2" />
      <path d="M13 11v2" />
    </svg>
  );
}

function UsersIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function WalletIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  );
}

export {
  DeleteIcon,
  DownloadIcon,
  FilePenIcon,
  HomeIcon,
  MoveVerticalIcon,
  ShareIcon,
  TagIcon,
  TicketIcon,
  UsersIcon,
  WalletIcon,
};
