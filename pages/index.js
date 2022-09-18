import Image from "next/image";
import Link from "next/link"; // Dynamic links
import Layout from "components/layout"; // Layout wrapper

function Home() {
  return (
    // Home page
    <>
    <Layout>
      <div className="home">
        {/* Home heading */}
        <div className="home__content">
          <h1>RxC QV</h1>
          <h2>関数型二次投票を簡単に開催できるツール</h2>
          <p>
            二次投票は、民主的なコミュニティで投票するための数学的に最適な方法です。
            方向性だけでなく、好みの度合いを表す票を割り当てることで、集団的な意思決定による投票が可能です。
          </p>
          <h2>下記より、二次投票イベントを開催してください</h2>
        </div>

        {/* Home buttons */}
        <div className="home__cta">
          <div className="home__cta_button">
            <Image  src="/vectors/create_event.svg" width={100}
      height={80} alt="Create event" />
            <h2>イベントを作成</h2>
            <p>こちらから二次投票の議題を作成できます</p>
            <Link href="/create">
              <a>イベントを作成</a>
            </Link>
          </div>
          <div className="home__cta_button">
            <Image src="/vectors/place_vote.svg" width={100}
      height={80} alt="Place vote" />
            <h2>投票ページ</h2>
            <p>イベント作成次に作られた秘密のコードで投票できます</p>
            <Link href="/place">
              <a>投票ページへ</a>
            </Link>
          </div>
        </div>

        {/* Scoped styling */}
        <style jsx>{`
          .home__content {
            max-width: 700px;
            padding: 50px 20px 0px 20px;
            margin: 0px auto;
          }
          .home__content > h1 {
            font-size: 40px;
            color: #000;
            margin: 0px;
          }
          .home__content > h2 {
            color: #000;
            margin-block-start: 0px;
          }
          .home__content > h2:nth-of-type(2) {
            color: #000;
            margin-block-end: 0px;
            margin-block-start: 60px;
          }
          .home__content > p {
            font-size: 18px;
            line-height: 150%;
            color: #80806b;
          }
          .home__cta {
            padding-top: 20px;
          }
          .home__cta_button {
            display: inline-block;
            max-width: 270px;
            width: calc(100% - 70px);
            background-color: #fff;
            margin: 20px;
            border-radius: 16px;
            border: 1px solid #f1f2e5;
            box-shadow: 0 4px 4px rgba(0, 0, 0, 0.125);
            padding: 15px;
            vertical-align: top;
          }
          .home__cta_button > img {
            height: 90px;
            margin-top: 15px;
          }
          .home__cta_button > h2 {
            color: #000;
            margin-block-end: 0px;
          }
          .home__cta_button > p {
            color: #80806b;
            font-size: 15px;
            margin-block-start: 5px;
            margin-block-end: 40px;
          }
          .home__cta_button > a {
            text-decoration: none;
            padding: 12px 0px;
            width: 100%;
            display: inline-block;
            border-radius: 16px;
            background-color: #000;
            color: #edff38;
            font-size: 18px;
            transition: 50ms ease-in-out;
          }
          .home__cta_button > a:hover {
            opacity: 0.8;
          }
        `}</style>
      </div>
      </Layout>
    </>
  );
}

export default Home