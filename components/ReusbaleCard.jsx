import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"


const ReusableCard = ({title, value}) => {
  return (
    <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{value}</div>
        </CardContent>
      </Card>
  )
}

export default ReusableCard
