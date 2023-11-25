import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

type DashboardCardProps = {
  cardIcon: React.ReactNode;
  cardTitle: string;
  cardContent: string;
};

export function DashboardCard({
  cardIcon,
  cardTitle,
  cardContent,
}: DashboardCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm capitalize font-medium">
          {cardTitle}
        </CardTitle>
        {cardIcon}
      </CardHeader>
      <CardContent className="font-bold text-2xl">{cardContent}</CardContent>
    </Card>
  );
}
