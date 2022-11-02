import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const MainNavigation = () => {
  return (
    <Navigation>
      <div className="topHeader">
        <div className="imageWrapper">
          <Link href="/">
            <Image
              src="/logo.svg"
              priority
              height={150}
              width={200}
              alt="logo"
            />
          </Link>
        </div>

        <nav>
          <ul>
            <li>
              <Link href="#">login</Link>
            </li>
            <li>
              <Link href="/contact">contact</Link>
            </li>
          </ul>

          <div className="cartWrapper">
            <Link href="/cart">
              <Image src="/cartIcon.svg" height={24} width={24} alt="cart" />
            </Link>
          </div>
        </nav>
      </div>
    </Navigation>
  );
};

export default MainNavigation;

const Navigation = styled.div`
  background-color: #004695;

  .topHeader {
    display: flex;
    justify-content: space-between;
    padding: 0 10%;
    height: 7rem;
    align-items: center;
  }

  nav {
    display: flex;
    align-items: center;
    ul {
      display: flex;
      li {
        list-style: none;
        color: #e9edf2;
        padding: 0 2rem;
      }
    }
  }

  .cartWrapper {
    padding-left: 3rem;
  }
`;
