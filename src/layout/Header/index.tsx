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
      height="15vh"
    >
      <Box>
        <Button variant="plain" as="a" href="/" target="_self">
          <Logo />
        </Button>
      </Box>
      <Links>
        <Link href="https://docs.pangolin.exchange/pangolin/all-chains/team">About us</Link>
        <Link href="https://app.pangolin.exchange">Exchange</Link>
        <Link href="https://info.pangolin.exchange/">Analytics</Link>
        <Link href="https://docs.pangolin.exchange/">Docs</Link>
        <Link variant="primary" href="https://app.pangolin.exchange">
          Lauch App
        </Link>
      </Links>
    </Box>
  );
}
