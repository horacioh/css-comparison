import React from "react";

export function App() {
  return (
    <div>
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
    <header role="banner" className="[ site-head ] [ bg-tertiary-glare ]">
      <div className="wrapper">
        <div className="site-head__inner">
          <h1 className="text-600">Account overview</h1>
          <div className="user">
            <a href="#">My profile</a>
            <img
              src="./assets/images/profile-image.jpg"
              width="50"
              height="50"
              alt="Profile image for Lorem Ipsum"
            />
          </div>
          hello
        </div>
      </div>
    </header>
  );
}

function Main({ children }) {
  return (
    <main>
      <article className="wrapper">{children}</article>
    </main>
  );
}

function LatestTransactions() {
  return (
    <div className="[ key-header ] [ splitter ] [ gap-top-700 ]">
      <h2 className="text-700" id="transaction-label">
        Latest transactions
      </h2>
      <aside>
        <a href="#" className="[ button ] [ radius ]" data-variant="ghost">
          Get statement
        </a>
        <a href="#" className="[ button ] [ radius ]">
          Make payment
        </a>
      </aside>
    </div>
  );
}

function Splitter({ children }) {
  return <div className="[ splitter ] [ gap-top-600 ]">{children}</div>;
}

function Transactions() {
  return (
    <section
      className="[ table-group ] [ flow radius ]"
      aria-labelledby="transaction-label"
    >
      <h3 className="color-secondary-shade text-400 weight-medium">
        14th July 2020
      </h3>
      <table>
        <thead className="visually-hidden">
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
              <span className="[ pill ] [ radius bg-tertiary color-light ]">
                Expenses
              </span>
            </td>
            <td>-£123.40</td>
          </tr>
          <tr>
            <td data-type="expense">Lorem ipsum dolor sit amet</td>
            <td>
              <span className="[ pill ] [ radius bg-quaternary color-light ]">
                Bills
              </span>
            </td>
            <td>-£70.40</td>
          </tr>
          <tr>
            <td data-type="bill">Lorem ipsum dolor sit amet</td>
            <td>
              <span className="[ pill ] [ radius bg-quaternary color-light ]">
                Bills
              </span>
            </td>
            <td>-£333.33</td>
          </tr>
        </tbody>
      </table>
      <h3 className="color-secondary-shade text-400 weight-medium">
        13th July 2020
      </h3>
      <table>
        <thead className="visually-hidden">
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
              <span className="[ pill ] [ radius bg-tertiary color-light ]">
                Expenses
              </span>
            </td>
            <td>-£123.40</td>
          </tr>
          <tr>
            <td data-type="expense">Lorem ipsum dolor sit amet</td>
            <td>
              <span className="[ pill ] [ radius bg-quaternary color-light ]">
                Bills
              </span>
            </td>
            <td>-£70.40</td>
          </tr>
          <tr>
            <td data-type="bill">Lorem ipsum dolor sit amet</td>
            <td>
              <span className="[ pill ] [ radius bg-quaternary color-light ]">
                Bills
              </span>
            </td>
            <td>-£333.33</td>
          </tr>
        </tbody>
      </table>
      <h3 className="color-secondary-shade text-400 weight-medium">
        12th July 2020
      </h3>
      <table>
        <thead className="visually-hidden">
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
              <span className="[ pill ] [ radius bg-tertiary color-light ]">
                Expenses
              </span>
            </td>
            <td>-£123.40</td>
          </tr>
          <tr>
            <td data-type="expense">Lorem ipsum dolor sit amet</td>
            <td>
              <span className="[ pill ] [ radius bg-quaternary color-light ]">
                Bills
              </span>
            </td>
            <td>-£70.40</td>
          </tr>
          <tr>
            <td data-type="bill">Lorem ipsum dolor sit amet</td>
            <td>
              <span className="[ pill ] [ radius bg-quaternary color-light ]">
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
    <section className="[ summary ] [ flow radius ] [ bg-primary color-light ]">
      <h3 className="color-tertiary-glare text-700">Summary</h3>
      <dl className="flow">
        <dt className="text-600 color-tertiary-glare">Balance</dt>
        <dd className="text-700 font-mono weight-bold">£673.43</dd>
        <dt className="text-600 color-tertiary-glare">Total outgoings</dt>
        <dd className="text-700 font-mono weight-bold">-£874.88</dd>
        <dt className="text-600 color-tertiary-glare">Total income</dt>
        <dd className="text-700 font-mono weight-bold">+£1548.31</dd>
      </dl>
    </section>
  );
}
