import Link from "next/link"; // Dynamic links
import Layout from "components/layout"; // Layout wrapper
import Navigation from "components/navigation"; // Navigation component

function Success({ query }) {
  return (
    <Layout>
      {/* Navigation header */}
      <Navigation
        history={{
          title: "Voting",
          link: `/vote?user=${query.user}`,
        }}
        title="Vote Success"
      />

      {/* Success dialog */}
      <div className="success">
        <h1>あなたの投票が入りました</h1>
        <p>投票が正常に行われました。</p>

        {/* Go back to voting */}
        <Link href={`/vote?user=${query.user}`}>
          <a>投票内容の変更</a>
        </Link>

        {/* Redirect to event dashboard */}
        <Link href={`/event?id=${query.event}`}>
          <a>イベントダッシュボードを見る</a>
        </Link>
      </div>

      {/* Scoped styling */}
      <style jsx>{`
        .success {
          max-width: 700px;
          width: calc(100% - 40px);
          padding: 50px 20px 0px 20px;
          margin: 0px auto;
        }

        .success > h1 {
          font-size: 40px;
          color: #000;
          margin: 0px;
        }

        .success > p {
          font-size: 18px;
          line-height: 150%;
          color: #80806b;
          margin-block-start: 0px;
        }

        .success > a {
          max-width: 200px;
          width: calc(100% - 40px);
          margin: 10px 20px;
          padding: 12px 0px;
          border-radius: 5px;
          text-decoration: none;
          font-size: 18px;
          display: inline-block;
          text-decoration: none;
          transition: 100ms ease-in-out;
        }

        .success > a:hover {
          opacity: 0.8;
        }

        .success > a:nth-of-type(1) {
          background-color: #edff38;
          color: #000;
        }

        .success > a:nth-of-type(2) {
          background-color: #000;
          color: #edff38;
        }
      `}</style>
    </Layout>
  );
}

// On initial page load:
Success.getInitialProps = ({ query }) => {
  // Collect url params
  return { query };
};

export default Success;
