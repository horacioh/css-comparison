import React from "react";
import { sprinkles } from "./styles/sprinkles.css";
import * as styles from "./styles/app.css";
import { style } from "@vanilla-extract/css";

import profileImg from "./assets/images/profile-image.jpg";

export function App() {
  return (
    <div
      className={sprinkles({
        backgroundColor: "light",
        color: "primary",
        fontFamily: "base",
      })}
    >
      <AccountOverview />
      <Main>
        <LatestTransactions />
        <Splitter>
          <Transactions />
          <Summary />
        </Splitter>
      </Main>
    </div>
  );
}

function AccountOverview() {
  return (
    <header role="banner" className={styles.siteHead.root}>
      <div className={styles.wrapper}>
        <div className={styles.siteHead.inner}>
          <h1 className={styles.siteHead.h1}>Account overview</h1>
          <div className={styles.user.root}>
            <a href="#">My profile</a>
            <img
              className={styles.user.img}
              src={profileImg}
              width="50"
              height="50"
              alt="Profile image for Lorem Ipsum"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

function Main({ children }) {
  return (
    <main>
      <article className={styles.wrapper}>{children}</article>
    </main>
  );
}

function LatestTransactions() {
  return (
    <div
      className={`${styles.splitter} ${styles.gapTop({
        size: "700",
      })} ${styles.keyHeader}`}
    >
      <h2 className={sprinkles({ fontSize: "700" })} id="transaction-label">
        Latest transactions
      </h2>
      <aside>
        <a href="#" className={styles.button({ type: "ghost" })}>
          Get statement
        </a>
        <a href="#" className={styles.button({ type: "default" })}>
          Make payment
        </a>
      </aside>
    </div>
  );
}

function Splitter({ children }) {
  return (
    <div className={`${styles.splitter} ${styles.gapTop({ size: "600" })}`}>
      {children}
    </div>
  );
}

function Transactions() {
  return (
    <section
      className={`${styles.tableGroup} ${styles.flow} ${styles.radius}`}
      aria-labelledby="transaction-label"
    >
      <h3
        className={sprinkles({
          color: "secondary-shade",
          fontSize: "400",
          fontWeight: "medium",
        })}
      >
        14th July 2020
      </h3>
      <table>
        <thead className={styles.visuallyHidden}>
          <tr>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-type="expense">Lorem ipsum dolor sit amet</td>
            <td>
              <span
                className={`${styles.pill({ color: "tertiary" })} ${
                  styles.radius
                }`}
              >
                Expenses
              </span>
            </td>
            <td>-£123.40</td>
          </tr>
          <tr>
            <td data-type="expense">Lorem ipsum dolor sit amet</td>
            <td>
              <span
                className={`${styles.pill({ color: "quaternary" })} ${
                  styles.radius
                }`}
              >
                Bills
              </span>
            </td>
            <td>-£70.40</td>
          </tr>
          <tr>
            <td data-type="bill">Lorem ipsum dolor sit amet</td>
            <td>
              <span
                className={`${styles.pill({ color: "quaternary" })} ${
                  styles.radius
                }`}
              >
                Bills
              </span>
            </td>
            <td>-£333.33</td>
          </tr>
        </tbody>
      </table>
      <h3
        className={sprinkles({
          color: "secondary-shade",
          fontSize: "400",
          fontWeight: "medium",
        })}
      >
        13th July 2020
      </h3>
      <table>
        <thead className={styles.visuallyHidden}>
          <tr>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-type="expense">Lorem ipsum dolor sit amet</td>
            <td>
              <span
                className={`${styles.pill({ color: "tertiary" })} ${
                  styles.radius
                }`}
              >
                Expenses
              </span>
            </td>
            <td>-£123.40</td>
          </tr>
          <tr>
            <td data-type="expense">Lorem ipsum dolor sit amet</td>
            <td>
              <span
                className={`${styles.pill({ color: "quaternary" })} ${
                  styles.radius
                }`}
              >
                Bills
              </span>
            </td>
            <td>-£70.40</td>
          </tr>
          <tr>
            <td data-type="bill">Lorem ipsum dolor sit amet</td>
            <td>
              <span
                className={`${styles.pill({ color: "quaternary" })} ${
                  styles.radius
                }`}
              >
                Bills
              </span>
            </td>
            <td>-£333.33</td>
          </tr>
        </tbody>
      </table>
      <h3
        className={sprinkles({
          color: "secondary-shade",
          fontSize: "400",
          fontWeight: "medium",
        })}
      >
        12th July 2020
      </h3>
      <table>
        <thead className={styles.visuallyHidden}>
          <tr>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-type="expense">Lorem ipsum dolor sit amet</td>
            <td>
              <span
                className={`${styles.pill({ color: "tertiary" })} ${
                  styles.radius
                }`}
              >
                Expenses
              </span>
            </td>
            <td>-£123.40</td>
          </tr>
          <tr>
            <td data-type="expense">Lorem ipsum dolor sit amet</td>
            <td>
              <span
                className={`${styles.pill({ color: "quaternary" })} ${
                  styles.radius
                }`}
              >
                Bills
              </span>
            </td>
            <td>-£70.40</td>
          </tr>
          <tr>
            <td data-type="bill">Lorem ipsum dolor sit amet</td>
            <td>
              <span
                className={`${styles.pill({ color: "quaternary" })} ${
                  styles.radius
                }`}
              >
                Bills
              </span>
            </td>
            <td>-£333.33</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

function Summary() {
  return (
    <section
      className={`${sprinkles({
        backgroundColor: "primary",
        color: "light",
      })} ${styles.summary} ${styles.radius} ${styles.flow}`}
    >
      <h3 className={sprinkles({ color: "tertiary-glare", fontSize: "700" })}>
        Summary
      </h3>
      <dl className={styles.flow}>
        <dt className={sprinkles({ fontSize: "600", color: "tertiary-glare" })}>
          Balance
        </dt>
        <dd
          className={sprinkles({
            fontSize: "700",
            fontWeight: "bold",
            fontFamily: "mono",
          })}
        >
          £673.43
        </dd>
        <dt
          className={sprinkles({
            fontSize: "600",
            color: "tertiary-glare",
          })}
        >
          Total outgoings
        </dt>
        <dd
          className={sprinkles({
            fontSize: "700",
            fontWeight: "bold",
            fontFamily: "mono",
          })}
        >
          -£874.88
        </dd>
        <dt
          className={sprinkles({
            fontSize: "600",
            color: "tertiary-glare",
          })}
        >
          Total income
        </dt>
        <dd
          className={sprinkles({
            fontSize: "700",
            fontWeight: "bold",
            fontFamily: "mono",
          })}
        >
          +£1548.31
        </dd>
      </dl>
    </section>
  );
}
