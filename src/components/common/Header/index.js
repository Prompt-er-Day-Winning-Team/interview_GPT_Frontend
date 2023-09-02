import * as S from "./style";
function Header() {
  return (
    <S.Wrap>
      <S.Logo src={process.env.PUBLIC_URL + "/images/Header/logo.svg"} />
    </S.Wrap>
  );
}

export default Header;
