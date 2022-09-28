import { Box, Button } from "@pangolindex/components";
import { ReactComponent as Logo } from "src/assets/svg/Logo.svg";
import { Link, Links } from "./styled";

export default function Header() {
  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="space-between"
      paddingY="50px"
    >
      <Box>
        <Button variant="plain" as="a" href="/" target="_self">
          <Logo />
        </Button>
      </Box>
      <Links>
        <Link href="/about">About us</Link>
        <Link href="/about">Exchange</Link>
        <Link href="https://info.pangolin.exchange/">Analytics</Link>
        <Link href="https://docs.pangolin.exchange/">Docs</Link>
        <Link variant="primary" href="https://app.pangolin.exchange">
          Lauch App
        </Link>
      </Links>
    </Box>
  );
}
