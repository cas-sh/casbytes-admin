import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu";

export default function NavBar() {
  return (
    <NavigationMenu className="flex">
      <NavigationMenuList className="flex justify-between max-w-5xl">
        <NavigationMenuItem>item one</NavigationMenuItem>
        <NavigationMenuItem>item one</NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
