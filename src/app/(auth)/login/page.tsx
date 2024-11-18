import { ModeToggle } from "@/components/ui-group/toggle-mode";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Login() {
  return (
    <main className="">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Login</CardTitle>
            <ModeToggle />
          </div>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </main>
  );
}
