import LineCharts from "@/components/LineCharts"
import PieCharts from "@/components/PieCharts"
import ReusableCard from "@/components/ReusbaleCard"
import TodoList from "@/components/TodoList"
import WeatherWidget from "@/components/WeatherWidget"

export const data = [
  { name: "Jan", sales: 4000, revenue: 2400 },
  { name: "Feb", sales: 3000, revenue: 1398 },
  { name: "Mar", sales: 2000, revenue: 9800 },
  { name: "Apr", sales: 2780, revenue: 3908 },
  { name: "May", sales: 1890, revenue: 4800 },
  { name: "Jun", sales: 2390, revenue: 3800 },
  { name: "Jul", sales: 3490, revenue: 4300 },
];

export default function Dashboard() {
  return (
    <>
    <div className=" grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <ReusableCard title='Users' value={100}/>
      <ReusableCard title='On going Events' value={500}/> 
      <TodoList/>
      <WeatherWidget/>
      
    </div>

    <div className="w-full mt-5 flex flex-col lg:flex-row gap-4">


    <LineCharts data={data}/>
    <PieCharts data={data}/>
 
    </div>

   
</>
  )
}