"use client";
import './Dashboard.css';
import { IconCurrencyPeso, IconDoorExit, IconHourglassEmpty, IconUsersGroup } from "@tabler/icons-react";
import DashboardMainBarchart from "~/components/DashboardMainBarchart";
import DashboardMainNav from "~/components/DashboardMainNav";
import DashboardRecentCard from "~/components/DashboardRecentCard";
import { useScreenSize } from "~/components/providers/ScreenSizeProvider";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { DateRangePicker } from "~/components/ui/date-range-picker";
import { Tabs, TabsList, TabsTrigger } from "~/components/ui/tabs";

export default function Dashboard() {
  const isSmallScreen = useScreenSize();
  return (
    <div className="main-content mt-5 h-full w-full">
      <DashboardMainNav />
      <div className="ml-4 mt-16 flex flex-row items-center justify-between">
        <div className="flex flex-col space-y-4">
          <p className="text-4xl font-bold">Dashboard</p>

          <Tabs defaultValue="Overview" className="mt-3 w-full">
            <TabsList>
              <TabsTrigger value="Overview">Overview</TabsTrigger>
              <TabsTrigger value="Analytics">Analytics</TabsTrigger>
              <TabsTrigger value="Reports">Reports</TabsTrigger>
              <TabsTrigger value="Notifications">Notifications</TabsTrigger>
            </TabsList>
          </Tabs>
          {isSmallScreen && (
            <div className="ml-full my-4 flex">
              <DateRangePicker
                onUpdate={(values) => console.log(values)}
                initialDateFrom="2024-01-01"
                initialDateTo="2024-12-31"
                align="start"
                locale="en-GB"
                showCompare={false}
              />
            </div>
          )}
        </div>
        {!isSmallScreen && (
          <DateRangePicker
            onUpdate={(values) => console.log(values)}
            initialDateFrom="2024-01-01"
            initialDateTo="2024-12-31"
            align="start"
            locale="en-GB"
            showCompare={false}
          />
        )}
      </div>
      <div className="ml-4 mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Monthly Payroll
            </CardTitle>
            <IconCurrencyPeso className="stroke-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">₱ 93,542.54</div>
            <p className="text-xs text-muted-foreground">
              +25.1% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Employees
            </CardTitle>
            <IconUsersGroup className="stroke-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">154</div>
            <p className="text-xs text-muted-foreground">
              +2.1% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Pending Leave Requests
            </CardTitle>
            <IconDoorExit className="stroke-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">35</div>
            <p className="text-xs text-muted-foreground">
              +19% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Pending Overtime Requests
            </CardTitle>
            <IconHourglassEmpty className="stroke-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              +13% from last month
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="row-span-1 ml-4 mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
        <div>
          <DashboardMainBarchart />
        </div>
        <DashboardRecentCard />
      </div>
    </div>
  );
}
