import React, { Component } from 'react'
import NewsItem from './NewsItem.js'
import { propTypes } from 'react';


export class News extends Component {
    articles = [
        // {
        //     "source": {
        //         "id": null,
        //         "name": "Biztoc.com"
        //     },
        //     "author": "yahoo.com",
        //     "title": "Tesla’s Not Done Cutting Prices as It Protects Lead in EVs",
        //     "description": "Tesla’s Not Done Cutting Prices as It Protects Lead in EVs (Bloomberg) -- Elon Musk signaled Tesla Inc. will continue to cut prices to stoke demand for its electric vehicles, even at the expense of its industry-leading profit margins. • None Tesla Slashes Pri…",
        //     "url": "https://biztoc.com/x/a2db2d4cec0d9f74",
        //     "urlToImage": "https://c.biztoc.com/p/a2db2d4cec0d9f74/og.webp",
        //     "publishedAt": "2023-04-20T04:06:03Z",
        //     "content": "Teslas Not Done Cutting Prices as It Protects Lead in EVs(Bloomberg) -- Elon Musk signaled Tesla Inc. will continue to cut prices to stoke demand for its electric vehicles, even at the expense of its… [+296 chars]"
        // },
        // {
        //     "source": {
        //         "id": null,
        //         "name": "Biztoc.com"
        //     },
        //     "author": "nytimes.com",
        //     "title": "Tesla’s Profit Dropped Sharply in First Quarter as It Cut Prices",
        //     "description": "Tesla made $2.5 billion in the first quarter, down from $3.7 billion in the previous quarter, the carmaker reported on Wednesday. The electric carmaker has reduced prices by thousands of dollars this year to bolster demand and fend off competition. Tesla’s pr…",
        //     "url": "https://biztoc.com/x/6d69196a1d629def",
        //     "urlToImage": "https://c.biztoc.com/p/6d69196a1d629def/og.webp",
        //     "publishedAt": "2023-04-20T04:00:04Z",
        //     "content": "Tesla made $2.5 billion in the first quarter, down from $3.7 billion in the previous quarter, the carmaker reported on Wednesday.\r\nThe electric carmaker has reduced prices by thousands of dollars thi… [+306 chars]"
        // },
        {
            "source": {
                "id": null,
                "name": "Minneapolis Star Tribune"
            },
            "author": "ELAINE KURTENBACH",
            "title": "Stock market today: Asian shares trading mostly lower",
            "description": "Shares are mostly lower in Asia in narrow trading after they barely budged on Wall Street following a mixed batch of earnings reports from big U.S. companies.",
            "url": "https://www.startribune.com/stock-market-today-asian-shares-trading-mostly-lower/600268229/",
            "urlToImage": "https://chorus.stimg.co/24069975/merlin_68613962.jpg?h=630&w=1200&fit=crop&bg=999&crop=faces",
            "publishedAt": "2023-04-20T03:40:02Z",
            "content": "Shares are mostly lower in Asia in narrow trading after they barely budged on Wall Street following a mixed batch of earnings reports from big U.S. companies.\r\nOil prices also declined.\r\nJapan report… [+3955 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CleanTechnica"
            },
            "author": "Chris Boylan",
            "title": "Chinese EV Maker HiPhi Unveils New Model, the “Y” and Plans to Expand to Europe",
            "description": "Yesterday at the Shanghai Auto Show, Chinese EV (electric vehicle) maker HiPhi unveiled its third model: the “Y.” The HiPhi Y joins the company’s two existing models, the X and Z. But perhaps more importantly, the company announced plans to export their cars …",
            "url": "https://cleantechnica.com/2023/04/19/chinese-ev-maker-hiphi-unveils-y-and-plans-to-expand-to-europe/",
            "urlToImage": "http://cleantechnica.com/files/2023/04/hiphi-y-750pixels.jpg",
            "publishedAt": "2023-04-20T03:34:24Z",
            "content": "Yesterday at the Shanghai Auto Show, Chinese EV (electric vehicle) maker HiPhi unveiled its third model: the “Y.” The HiPhi Y joins the company’s two existing models, the X and Z. But perhaps more im… [+4042 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Slashdot.org"
            },
            "author": "feedfeeder",
            "title": "As Tesla margins tank, Elon Musk again points to self driving as future savior - MarketWatch",
            "description": "As Tesla margins tank, Elon Musk again points to self driving as future saviorMarketWatch Tesla net income and earnings drop more than 20% from last yearCNBC Tesla Earnings: Profit Drops 24% After Price CutsThe Wall Street Journal This is Tesla's moment of tr…",
            "url": "https://slashdot.org/firehose.pl?op=view&amp;id=170791832",
            "urlToImage": null,
            "publishedAt": "2023-04-20T03:33:36Z",
            "content": "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way."
        },
        {
            "source": {
                "id": null,
                "name": "Moneycontrol"
            },
            "author": "Santosh Nair",
            "title": "Short Call | In the red, but not in bear hug yet: Adani Ports, Angel One, gold, Voltas, Titan to rule",
            "description": "An expected correction is how most players are seeing it, considering that the market had risen nine sessions in a row. The near-term outlook remains cautious",
            "url": "https://www.moneycontrol.com/news/business/markets/short-call-in-the-red-but-not-in-bear-hug-yet-adani-ports-angel-one-gold-voltas-titan-to-rule-10443761.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/03/markets15-770x435.jpg",
            "publishedAt": "2023-04-20T03:24:24Z",
            "content": "Anomalies are always to be found in the business situation. - Philip Carret\r\nThe mood is not bearish, despite three straight sessions in the red. An expected correction is how most players are seeing… [+5228 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "marketwatch.com",
            "title": "With Tesla stock and margins under pressure, Elon Musk falls back on his favorite fantasy",
            "description": "Tesla Inc.’s profit margins are declining amid massive price cuts, and that was almost all that investors and analysts wanted to talk about after the electric-vehicle company released earnings Wednesday. Tesla TSLA, Chief Executive Elon Musk had an answer to …",
            "url": "https://biztoc.com/x/e3e8665bdde14ae6",
            "urlToImage": "https://c.biztoc.com/p/e3e8665bdde14ae6/og.webp",
            "publishedAt": "2023-04-20T03:22:06Z",
            "content": "Tesla Inc.s profit margins are declining amid massive price cuts, and that was almost all that investors and analysts wanted to talk about after the electric-vehicle company released earnings Wednesd… [+298 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "Reuters",
            "title": "Elon Musk says Tesla likely to launch full self-drive technology 'this year'",
            "description": "Elon Musk said on Wednesday that electric vehicle (EV) giant Tesla likely will launch full self-drive technology this year and generate significant profits that offset some of the margin pressure it's facing due to aggressive price cuts. Tesla has said the te…",
            "url": "https://timesofindia.indiatimes.com/business/international-business/elon-musk-says-tesla-likely-to-launch-full-self-drive-technology-this-year/articleshow/99628264.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-99628502,width-1070,height-580,imgsize-25332,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-04-20T03:19:48Z",
            "content": "FD Calculator\r\nWhen investing in a fixed deposit, the amount you deposit earns interest as per the prevailing...\r\nCalculate Now"
        },
        {
            "source": {
                "id": "al-jazeera-english",
                "name": "Al Jazeera English"
            },
            "author": "Al Jazeera",
            "title": "Tesla’s profits drop by one-quarter after vehicle price cuts",
            "description": "Electric carmaker's profits come in at $2.5bn in first quarter, down 24 percent year-on-year.",
            "url": "https://www.aljazeera.com/economy/2023/4/20/teslas-profits-drop-by-one-quarter-after-vehicle-price-cuts",
            "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/04/2021-04-26T000000Z_885315115_RC2Q3N9LSSI7_RTRMADP_3_TESLA-RESULTS-1681954152.jpg?resize=1920%2C1440",
            "publishedAt": "2023-04-20T03:15:37Z",
            "content": "Tesla has reported a drop in first-quarter earnings as price cuts at Elon Musks electric vehicle company boosted demand but hit profit margins.\r\nProfits came in at $2.5bn, down by 24 percent from the… [+3933 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Digital Trends"
            },
            "author": "Trevor Mogg",
            "title": "Tesla’s Cybertruck set for summer delivery event",
            "description": "Elon Musk revealed on Wednesday that Tesla’s long-awaited Cybertruck pickup will finally hit the road sometime this summer.",
            "url": "https://www.digitaltrends.com/cars/teslas-cybertruck-set-for-summer-delivery-event/",
            "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2023/04/Cybertruck.jpeg?resize=1200%2C630&p=1",
            "publishedAt": "2023-04-20T03:10:47Z",
            "content": "Skip to main content\r\nTesla\r\nElon Musk said on Wednesday that Tesla’s Cybertruck will finally hit the road sometime this summer.\r\nSpeaking during an earnings call with investors, the Tesla chief said… [+1698 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "marketwatch.com",
            "title": "With Tesla stock and margins under pressure, Elon Musk falls back on his favorite fantasy",
            "description": "Tesla Inc.’s profit margins are declining amid massive price cuts, and that was almost all that investors and analysts wanted to talk about after the electric-vehicle company released earnings Wednesday. Tesla TSLA, Chief Executive Elon Musk had an answer to …",
            "url": "https://biztoc.com/x/2756b8fc124847d1",
            "urlToImage": "https://c.biztoc.com/p/2756b8fc124847d1/og.webp",
            "publishedAt": "2023-04-20T03:04:03Z",
            "content": "Tesla Inc.s profit margins are declining amid massive price cuts, and that was almost all that investors and analysts wanted to talk about after the electric-vehicle company released earnings Wednesd… [+298 chars]"
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "Breakingviews - Tesla can no longer succeed just on its own terms - Reuters",
            "description": "Breakingviews - Tesla can no longer succeed just on its own terms  Reuters",
            "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiYGh0dHBzOi8vd3d3LnJldXRlcnMuY29tL2JyZWFraW5ndmlld3MvdGVzbGEtY2FuLW5vLWxvbmdlci1zdWNjZWVkLWp1c3QtaXRzLW93bi10ZXJtcy0yMDIzLTA0LTIwL9IBAA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
            "urlToImage": null,
            "publishedAt": "2023-04-20T02:59:00Z",
            "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "International Business Times"
            },
            "author": "AFP News",
            "title": "Asian Markets Swing As Inflation, Rates Worry Investors",
            "description": "Asian markets swing as inflation, rates worry investors",
            "url": "https://www.ibtimes.com/asian-markets-swing-inflation-rates-worry-investors-3687590",
            "urlToImage": "https://d.ibtimes.com/en/full/4447931/stubbornly-high-uk-inflation-worries-about-future-central-bank-moves-tame-rampant-consumer-prices.jpg",
            "publishedAt": "2023-04-20T02:57:32Z",
            "content": "Stubbornly high UK inflation and worries about future central bank moves to tame rampant consumer prices helped drag down stocks across much of the worldAFP\r\nAsian markets fluctuated Thursday followi… [+3424 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "techaint.com",
            "title": "Tesla’s price cut increases sales, reduces profits",
            "description": "Tesla wants to “use our cost leadership as a lever”. The lower margins due to price reductions “can be managed”. Tesla was able to increase its sales in the first quarter of 2023. Operating profit, net profit, and cash flow, on the other hand, have fallen sig…",
            "url": "https://biztoc.com/x/4bc19361b538bf8a",
            "urlToImage": "https://c.biztoc.com/p/4bc19361b538bf8a/og.webp",
            "publishedAt": "2023-04-20T02:56:09Z",
            "content": "Tesla wants to use our cost leadership as a lever. The lower margins due to price reductions can be managed.Tesla was able to increase its sales in the first quarter of 2023. Operating profit, net pr… [+229 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Bangkok Post"
            },
            "author": "Reuters",
            "title": "Tesla likely to launch full self-drive technology this year",
            "description": "SAN FRANCISCO: Elon Musk said on Wednesday that electric vehicle (EV) giant Tesla likely will launch full self-drive technology this year and generate significant profits that offset some of the margin pressure it's facing due to aggressive price cuts.",
            "url": "https://www.bangkokpost.com/auto/news/2553321/musk-says-tesla-likely-to-launch-full-self-drive-technology-this-year",
            "urlToImage": "https://static.bangkokpost.com/media/content/20230420/c1_2553321_700.jpg",
            "publishedAt": "2023-04-20T02:55:00Z",
            "content": "SAN FRANCISCO: Elon Musk said on Wednesday that electric vehicle (EV) giant Tesla likely will launch full self-drive technology this year and generate significant profits that offset some of the marg… [+1692 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "AFP",
            "title": "Asian markets swing as inflation, rates worry investors",
            "description": "Asian markets fluctuated Thursday following a tepid performance in New York and Europe as traders fret over the inflation outlook and central bank plans to...",
            "url": "https://news.yahoo.com/asian-markets-swing-inflation-rates-025347031.html",
            "urlToImage": "https://media.zenfs.com/en/afp.com/8e65f1206ed5cd3eeda0a875347af915",
            "publishedAt": "2023-04-20T02:53:47Z",
            "content": "Asian markets fluctuated Thursday following a tepid performance in New York and Europe as traders fret over the inflation outlook and central bank plans to hike interest rates to tame rampant prices.… [+3265 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Investing.com"
            },
            "author": "Reuters",
            "title": "Musk says Tesla likely to launch full self-drive technology 'this year'",
            "description": "Musk says Tesla likely to launch full self-drive technology 'this year'",
            "url": "https://www.investing.com/news/stock-market-news/musk-says-tesla-likely-to-launch-full-selfdrive-technology-this-year-3059965",
            "urlToImage": "https://i-invdn-com.investing.com/news/LYNXNPED920A7_L.jpg",
            "publishedAt": "2023-04-20T02:49:30Z",
            "content": "By Hyunjoo Jin\r\nSAN FRANCISCO (Reuters) - Elon Musk said on Wednesday that electric vehicle (EV) giant Tesla (NASDAQ:TSLA) likely will launch full self-drive technology this year and generate signifi… [+1738 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Electrek"
            },
            "author": "Mikey G",
            "title": "Quick Charge Podcast: April 19, 2023",
            "description": "Listen to a recap of the top stories of the day from Electrek. Quick Charge is available now on Apple Podcasts, Spotify, TuneIn and our RSS feed for Overcast and other podcast players.\n\r\n\n more…\nThe post Quick Charge Podcast: April 19, 2023 appeared first on …",
            "url": "https://electrek.co/2023/04/19/quick-charge-podcast-april-19-2023/",
            "urlToImage": "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2020/01/quick-charge-placeholder-lead-1.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2023-04-20T02:42:06Z",
            "content": "Listen to a recap of the top stories of the day from Electrek. Quick Charge is available now on Apple Podcasts, Spotify, TuneIn and our RSS feed for Overcast and other podcast players.\r\nNew episodes … [+1813 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "investing.com",
            "title": "Dow futures dip, Tesla sheds 5.9% after earnings",
            "description": "Investing.com - U.S. stock futures were trading lower during Wednesday's evening trade, after a mixed session among major benchmark averages as investors closely monitored earnings results from companies including Netflix Inc (NASDAQ: ) and (NYSE: ). By 7:00p…",
            "url": "https://biztoc.com/x/45d3ab2aae7b55d2",
            "urlToImage": "https://c.biztoc.com/p/45d3ab2aae7b55d2/og.webp",
            "publishedAt": "2023-04-20T02:40:06Z",
            "content": "Investing.com - U.S. stock futures were trading lower during Wednesday's evening trade, after a mixed session among major benchmark averages as investors closely monitored earnings results from compa… [+311 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "reuters.com",
            "title": "Musk says Tesla likely to launch full self-drive technology 'this year'",
            "description": "SAN FRANCISCO, April 19 (Reuters) - Elon Musk said on Wednesday that electric vehicle (EV) giant Tesla (TSLA.O) likely will launch full self-drive technology this year and generate significant profits that offset some of the margin pressure it's facing due to…",
            "url": "https://biztoc.com/x/c4f090becb4a6108",
            "urlToImage": "https://c.biztoc.com/p/c4f090becb4a6108/og.webp",
            "publishedAt": "2023-04-20T02:40:05Z",
            "content": "SAN FRANCISCO, April 19 (Reuters) - Elon Musk said on Wednesday that electric vehicle (EV) giant Tesla (TSLA.O) likely will launch full self-drive technology this year and generate significant profit… [+310 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "thedrive.com",
            "title": "Tesla Model 3 Starts Under $40K After Latest Price Cut",
            "description": "Tesla slashed prices on its most popular Model 3 and Model Y electric cars Tuesday, the sixth price cut this year and the second this month as the automaker adjusts for new EV incentives and rapid growth among competitors. The Tesla Model 3 Rear-Wheel Drive n…",
            "url": "https://biztoc.com/x/5f08cb9d65f932d4",
            "urlToImage": "https://c.biztoc.com/p/5f08cb9d65f932d4/og.webp",
            "publishedAt": "2023-04-20T02:38:17Z",
            "content": "Tesla slashed prices on its most popular Model 3 and Model Y electric cars Tuesday, the sixth price cut this year and the second this month as the automaker adjusts for new EV incentives and rapid gr… [+315 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "benzinga.com",
            "title": "Why NIO Stock Is Trading Lower Today - NIO (NYSE:NIO)",
            "description": "NIO Inc. NIO shares are trading lower amidst weakness in Chinese EV stocks following Tesla's TSLA announcement of more U.S. vehicle price cuts. What Happened: On Wednesday, Tesla announced price cuts across its Model Y variants and the rear-wheel drive of its…",
            "url": "https://biztoc.com/x/cf63bdef0e0ccd7e",
            "urlToImage": "https://c.biztoc.com/p/cf63bdef0e0ccd7e/og.webp",
            "publishedAt": "2023-04-20T02:38:13Z",
            "content": "NIO Inc. NIO shares are trading lower amidst weakness in Chinese EV stocks following Tesla's TSLA announcement of more U.S. vehicle price cuts.What Happened: On Wednesday, Tesla announced price cuts … [+266 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "Reuters",
            "title": "Dow dips, S&P 500 stable after medtech gains, Netflix drag",
            "description": "The S&P 500 ended virtually unchanged on Wednesday while the Dow dipped as investors digested a mixed bag of corporate earnings, including upbeat reports from medical technology companies, countered by weakness in Netflix shares.",
            "url": "https://economictimes.indiatimes.com/markets/stocks/news/dow-dips-sp-500-stable-after-medtech-gains-netflix-drag/articleshow/99627249.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-99627275,width-1070,height-580,imgsize-84836,overlay-etmarkets/photo.jpg",
            "publishedAt": "2023-04-20T02:36:04Z",
            "content": "The S&amp;P 500 ended virtually unchanged on Wednesday while the Dow dipped as investors digested a mixed bag of corporate earnings, including upbeat reports from medical technology companies, counte… [+3268 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "cointelegraph.com",
            "title": "Elon Musk threatens Microsoft with suit, claims AI trained on Twitter data",
            "description": "Microsoft has been threatened with a suit from Tesla and Twitter chief Elon Musk who claimed the Big Tech firm “illegally” trained its artificial intelligence (AI) on Twitter data. On April 19, Musk tweeted that it was “lawsuit time” in response to a post rep…",
            "url": "https://biztoc.com/x/aa9235fd1835c04c",
            "urlToImage": "https://c.biztoc.com/p/aa9235fd1835c04c/og.webp",
            "publishedAt": "2023-04-20T02:34:06Z",
            "content": "Microsoft has been threatened with a suit from Tesla and Twitter chief Elon Musk who claimed the Big Tech firm illegally trained its artificial intelligence (AI) on Twitter data.On April 19, Musk twe… [+302 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNA"
            },
            "author": null,
            "title": "Musk says Tesla likely to launch full self-drive technology 'this year'",
            "description": "SAN FRANCISCO : Elon Musk said on Wednesday that electric vehicle (EV) giant Tesla likely will launch full self-drive technology this year and generate significant profits that offset some of the margin pressure it's facing due to aggressive price cuts.\"I hes…",
            "url": "https://www.channelnewsasia.com/business/musk-says-tesla-likely-launch-full-self-drive-technology-year-3431041",
            "urlToImage": "https://onecms-res.cloudinary.com/image/upload/s--Bbs3Nrki--/fl_relative,g_south_east,l_one-cms:core:watermark:reuters,w_0.1/f_auto,q_auto/c_fill,g_auto,h_676,w_1200/v1/one-cms/core/2023-04-20t023314z_1_lynxmpej3j02c_rtroptp_3_tesla-results.jpg?itok=rxTlL9gK",
            "publishedAt": "2023-04-20T02:33:14Z",
            "content": "SAN FRANCISCO : Elon Musk said on Wednesday that electric vehicle (EV) giant Tesla likely will launch full self-drive technology this year and generate significant profits that offset some of the mar… [+1698 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Hyunjoo Jin",
            "title": "Musk says Tesla likely to launch full self-drive technology 'this year'",
            "description": "Elon Musk said on Wednesday that electric vehicle (EV) giant Tesla likely will launch full self-drive technology this year and generate significant profits...",
            "url": "https://finance.yahoo.com/news/musk-says-tesla-likely-launch-023314155.html",
            "urlToImage": "https://media.zenfs.com/en/reuters-finance.com/0246253f98a9ed68f7f7fb4eb986457f",
            "publishedAt": "2023-04-20T02:33:14Z",
            "content": "By Hyunjoo Jin\r\nSAN FRANCISCO (Reuters) - Elon Musk said on Wednesday that electric vehicle (EV) giant Tesla likely will launch full self-drive technology this year and generate significant profits t… [+1866 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "PR Newswire",
            "title": "Artificial intelligence (AI) chips market to grow at a CAGR of 61.51% from 2022 to 2027: Growth from ASICs segment will be significant - Technavio",
            "description": "The artificial intelligence (AI) chips market size is estimated to grow by USD 210,506.47 million during 2022-2027. Moreover, the growth momentum will...",
            "url": "https://finance.yahoo.com/news/artificial-intelligence-ai-chips-market-023000083.html",
            "urlToImage": "https://media.zenfs.com/en/prnewswire.com/e0a2ffb467b16204c58b9a117bab2348",
            "publishedAt": "2023-04-20T02:30:00Z",
            "content": "NEW YORK, April 19, 2023 /PRNewswire/ -- The artificial intelligence (AI) chips market size is estimated to grow by USD 210,506.47 million during 2022-2027. Moreover, the growth momentum will progres… [+14400 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "PRNewswire"
            },
            "author": null,
            "title": "Artificial intelligence (AI) chips market to grow at a CAGR of 61.51% from 2022 to 2027: Growth from ASICs segment will be significant - Technavio",
            "description": "NEW YORK, April 19, 2023 /PRNewswire/ -- The artificial intelligence (AI) chips market size is estimated to grow by USD 210,506.47 million during 2022-2027. Moreover, the growth momentum will progress at a CAGR of 61.51% during the forecast period. The ASICs …",
            "url": "https://www.prnewswire.com/news-releases/artificial-intelligence-ai-chips-market-to-grow-at-a-cagr-of-61-51-from-2022-to-2027-growth-from-asics-segment-will-be-significant---technavio-301800599.html",
            "urlToImage": "https://mma.prnewswire.com/media/2057006/market_research_report.jpg?p=facebook",
            "publishedAt": "2023-04-20T02:30:00Z",
            "content": "NEW YORK, April 19, 2023 /PRNewswire/ -- The artificial intelligence (AI) chips market size is estimated to grow by USD 210,506.47 million during 2022-2027. Moreover, the growth momentum will progres… [+29369 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Cointelegraph"
            },
            "author": "Cointelegraph By Brayden Lindrea",
            "title": "Elon Musk threatens Microsoft with suit, claims AI trained on Twitter data",
            "description": "Elon Musk threatened to sue Microsoft claiming it “illegally” used Twitter data to train its AI, it comes after Microsoft scrapped Twitter support from its advertising platform.",
            "url": "https://cointelegraph.com/news/elon-musk-threatens-microsoft-with-suit-claims-ai-trained-on-twitter-data",
            "urlToImage": "https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=1200/https://s3.cointelegraph.com/uploads/2023-04/ea76327d-c193-4e70-b533-2b0f4506d1f1.jpg",
            "publishedAt": "2023-04-20T02:29:54Z",
            "content": "Microsoft has been threatened with a suit from Tesla and Twitter chief Elon Musk who claimed the Big Tech firm illegally trained its artificial intelligence (AI) on Twitter data.\r\nOn April 19, Musk t… [+2701 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "AFP",
            "title": "Tesla Q1 profit falls on vehicle price cuts; stock tumbles 6%",
            "description": "Musk is also the founder of SpaceX, which has scheduled for Thursday the first test flight of Starship, which is \"designed to send astronauts to the Moon, Mars and beyond,\" according to the venture's website.",
            "url": "https://economictimes.indiatimes.com/markets/stocks/earnings/tesla-q1-profit-falls-on-vehicle-price-cuts-stock-tumbles-6/articleshow/99627101.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-99627115,width-1070,height-580,imgsize-77362,overlay-etmarkets/photo.jpg",
            "publishedAt": "2023-04-20T02:28:05Z",
            "content": "Tesla reported a drop in first-quarter earnings Wednesday as price cuts at Elon Musk's electric vehicle company boosted demand but hit profit margins.Profits came in at $2.5 billion, down 24 percent … [+4009 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Drive.com.au"
            },
            "author": "Ben Zachariah",
            "title": "Elon Musk says Tesla autonomous driving will happen ‘this year’ – for the fourth year in a row",
            "description": "For the fourth year in a row, Tesla boss Elon Musk has claimed the company will launch its so-called autonomous driving technology by the end of the year.",
            "url": "https://www.drive.com.au/news/elon-musk-says-autonomous-driving-will-happen-this-year/",
            "urlToImage": "https://images.drive.com.au/caradvice/image/private/c_fill,f_auto,g_auto,h_675,q_auto:good,w_1200/i99wkypcz3zupovqubri",
            "publishedAt": "2023-04-20T02:26:15Z",
            "content": "During a quarterly earnings call this week in which the electric-car company confirmed profits were down 24 per cent compared with the same time last year, despite manufacturing a record number of ca… [+115 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "reuters.com",
            "title": "Asian stocks ease, dollar subdued as investors tread with caution",
            "description": "Asian stocks edged lower on Thursday, while the dollar was on the back foot as investors remained cautious ahead of an expected 25 basis point hike in interest rates by the U.S. Federal Reserve next month. MSCI's broadest index of Asia-Pacific shares outside …",
            "url": "https://biztoc.com/x/a628d84ab9147e39",
            "urlToImage": "https://c.biztoc.com/p/a628d84ab9147e39/og.webp",
            "publishedAt": "2023-04-20T02:26:05Z",
            "content": "Asian stocks edged lower on Thursday, while the dollar was on the back foot as investors remained cautious ahead of an expected 25 basis point hike in interest rates by the U.S. Federal Reserve next … [+304 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "Reuters",
            "title": "Asian stocks ease, dollar subdued as investors tread with caution",
            "description": "Shares of Tesla Inc slid 6% in after-hours trading after the electric vehicle maker posted its lowest quarterly gross margin in two years, missing market estimates. Elon Musk doubled down on the price war he started at the end of last year, saying Tesla would…",
            "url": "https://economictimes.indiatimes.com/markets/stocks/news/asian-stocks-ease-dollar-subdued-as-investors-tread-with-caution/articleshow/99627016.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-99627059,width-1070,height-580,imgsize-210096,overlay-etmarkets/photo.jpg",
            "publishedAt": "2023-04-20T02:24:10Z",
            "content": "Asian stocks edged lower on Thursday, while the dollar was on the back foot as investors remained cautious ahead of an expected 25 basis point hike in interest rates by the U.S. Federal Reserve next … [+3160 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "International Business Times"
            },
            "author": "Ankur Banerjee",
            "title": "Asian Stocks Ease, Dollar Subdued As Investors Tread With Caution",
            "description": "Asian stocks edged lower on Thursday, while the dollar was on the back foot as investors remained cautious ahead of an expected 25 basis point hike in interest rates by the U.S.",
            "url": "https://www.ibtimes.com/asian-stocks-ease-dollar-subdued-investors-tread-caution-3687575",
            "urlToImage": "https://d.ibtimes.com/en/full/4447922/passersby-are-reflected-electric-stock-quotation-board-outside-brokerage-tokyo.jpg",
            "publishedAt": "2023-04-20T02:21:32Z",
            "content": "Passersby are reflected on an electric stock quotation board outside a brokerage in Tokyo, Japan April 18, 2023. Reuters\r\nAsian stocks edged lower on Thursday, while the dollar was on the back foot a… [+3239 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Investing.com"
            },
            "author": "Reuters",
            "title": "Asian stocks ease, dollar subdued as investors tread with caution",
            "description": "Asian stocks ease, dollar subdued as investors tread with caution",
            "url": "https://www.investing.com/news/economy/asian-stocks-ease-dollar-subdued-as-investors-tread-with-caution-3059961",
            "urlToImage": "https://i-invdn-com.investing.com/news/SP500StandardandPoors500Index_800x533_L_1657544297.jpg",
            "publishedAt": "2023-04-20T02:21:07Z",
            "content": "By Ankur Banerjee\r\nSINGAPORE (Reuters) - Asian stocks edged lower on Thursday, while the dollar was on the back foot as investors remained cautious ahead of an expected 25 basis point hike in interes… [+3119 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Ankur Banerjee",
            "title": "Asian stocks ease, dollar subdued as investors tread with caution",
            "description": "Asian stocks edged lower on Thursday, while the dollar was on the back foot as investors remained cautious ahead of an expected 25 basis point hike in...",
            "url": "https://finance.yahoo.com/news/asian-stocks-ease-dollar-subdued-021833811.html",
            "urlToImage": "https://media.zenfs.com/en/reuters-finance.com/6793a47b97db5d7ff12a82a6a25d7ad8",
            "publishedAt": "2023-04-20T02:18:33Z",
            "content": "By Ankur Banerjee\r\nSINGAPORE (Reuters) - Asian stocks edged lower on Thursday, while the dollar was on the back foot as investors remained cautious ahead of an expected 25 basis point hike in interes… [+3165 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Marketscreener.com"
            },
            "author": "Reuters",
            "title": "Asian stocks ease, dollar subdued as investors tread with caution",
            "description": "(marketscreener.com) Asian stocks edged lower on Thursday, while the dollar was on the back foot as investors remained cautious ahead of an expected 25 basis point hike in interest rates by the U.S. Federal Reserve next month. https://www.marketscreener.com/n…",
            "url": "https://www.marketscreener.com/news/latest/Asian-stocks-ease-dollar-subdued-as-investors-tread-with-caution--43547492/?utm_medium=RSS&utm_content=20230420",
            "urlToImage": "https://img.zonebourse.com/reuters/2023-04/2023-04-20T021833Z_1_LYNXMPEJ3J01U_RTROPTP_3_GLOBAL-MARKETS.JPG",
            "publishedAt": "2023-04-20T02:18:33Z",
            "content": "SINGAPORE (Reuters) - Asian stocks edged lower on Thursday, while the dollar was on the back foot as investors remained cautious ahead of an expected 25 basis point hike in interest rates by the U.S.… [+3170 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNA"
            },
            "author": null,
            "title": "Asian stocks ease, dollar subdued as investors tread with caution",
            "description": "SINGAPORE : Asian stocks edged lower on Thursday, while the dollar was on the back foot as investors remained cautious ahead of an expected 25 basis point hike in interest rates by the U.S. Federal Reserve next month. MSCI's broadest index of Asia-Pacific sha…",
            "url": "https://www.channelnewsasia.com/business/asian-stocks-ease-dollar-subdued-investors-tread-caution-3431001",
            "urlToImage": "https://onecms-res.cloudinary.com/image/upload/s--y289IIBM--/fl_relative,g_south_east,l_one-cms:core:watermark:reuters,w_0.1/f_auto,q_auto/c_fill,g_auto,h_676,w_1200/v1/one-cms/core/2023-04-20t021833z_1_lynxmpej3j01u_rtroptp_3_global-markets.jpg?itok=r_MEBV7c",
            "publishedAt": "2023-04-20T02:18:33Z",
            "content": "SINGAPORE : Asian stocks edged lower on Thursday, while the dollar was on the back foot as investors remained cautious ahead of an expected 25 basis point hike in interest rates by the U.S. Federal R… [+3244 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "marketwatch.com",
            "title": "With Tesla stock and margins under pressure, Elon Musk falls back on his favorite fantasy",
            "description": "Tesla Inc.’s profit margins are declining amid massive price cuts, and that was almost all that investors and analysts wanted to talk about after the electric-vehicle company released earnings Wednesday. Tesla TSLA, Chief Executive Elon Musk had an answer to …",
            "url": "https://biztoc.com/x/77e2feb0535444be",
            "urlToImage": "https://c.biztoc.com/p/77e2feb0535444be/og.webp",
            "publishedAt": "2023-04-20T02:18:04Z",
            "content": "Tesla Inc.s profit margins are declining amid massive price cuts, and that was almost all that investors and analysts wanted to talk about after the electric-vehicle company released earnings Wednesd… [+298 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "scmp.com",
            "title": "Tesla to put sales growth before profit to fend off competition from carmakers such as China’s BYD, says Musk",
            "description": "Tesla boss Elon Musk is doubling down on the price war he started at the end of last year, saying the electric vehicle maker would prioritise sales growth over profit in a weak economy.#tesla #elonmusk",
            "url": "https://biztoc.com/x/127262eb6eeaabe6",
            "urlToImage": "https://c.biztoc.com/p/127262eb6eeaabe6/og.webp",
            "publishedAt": "2023-04-20T02:12:15Z",
            "content": "Tesla boss Elon Musk is doubling down on the price war he started at the end of last year, saying the electric vehicle maker would prioritise sales growth over profit in a weak economy. \r\n#tesla#elon… [+50 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MarketWatch"
            },
            "author": "Therese Poletti",
            "title": "MarketWatch First Take: With Tesla stock and margins under pressure, Elon Musk falls back on his favorite fantasy",
            "description": "Tesla CEO insists full autonomy will solve the car maker’s current margin issue and is right around the corner, but investors appear to understand that Musk’s self-driving promises are not to be believed",
            "url": "https://www.marketwatch.com/story/with-tesla-stock-and-margins-under-pressure-elon-musk-falls-back-on-his-favorite-fantasy-124a8ea7",
            "urlToImage": "https://images.mktw.net/im-766882/social",
            "publishedAt": "2023-04-20T02:09:54Z",
            "content": "Tesla Inc.s profit margins are declining amid massive price cuts, and that was almost all that investors and analysts wanted to talk about after the electric-vehicle company released earnings Wednesd… [+3289 chars]"
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "As Tesla margins tank, Elon Musk again points to self driving as future savior - MarketWatch",
            "description": "<ol><li>As Tesla margins tank, Elon Musk again points to self driving as future savior  MarketWatch\r\n</li><li>Tesla net income and earnings drop more than 20% from last year  CNBC\r\n</li><li>Tesla earnings: Q1 revenue, profit miss estimates; gross margin dips …",
            "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMigwFodHRwczovL3d3dy5tYXJrZXR3YXRjaC5jb20vc3Rvcnkvd2l0aC10ZXNsYS1zdG9jay1hbmQtbWFyZ2lucy11bmRlci1wcmVzc3VyZS1lbG9uLW11c2stZmFsbHMtYmFjay1vbi1oaXMtZmF2b3JpdGUtZmFudGFzeS0xMjRhOGVhN9IBhwFodHRwczovL3d3dy5tYXJrZXR3YXRjaC5jb20vYW1wL3N0b3J5L3dpdGgtdGVzbGEtc3RvY2stYW5kLW1hcmdpbnMtdW5kZXItcHJlc3N1cmUtZWxvbi1tdXNrLWZhbGxzLWJhY2stb24taGlzLWZhdm9yaXRlLWZhbnRhc3ktMTI0YThlYTc?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
            "urlToImage": null,
            "publishedAt": "2023-04-20T02:00:00Z",
            "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Business Today"
            },
            "author": "Reuters",
            "title": "Elon Musk says Tesla will put sales growth ahead of profit",
            "description": "Shares in the Austin, Texas-based automaker were down 6% in after-hours trading.",
            "url": "https://www.businesstoday.in/auto/story/elon-musk-says-tesla-will-put-sales-growth-ahead-of-profit-378094-2023-04-20",
            "urlToImage": "https://akm-img-a-in.tosshub.com/businesstoday/images/assets/202304/elon-musk.jpg",
            "publishedAt": "2023-04-20T01:50:38Z",
            "content": "Tesla Inc boss Elon Musk on Wednesday doubled down on the price war he started at the end of last year, saying the electric vehicle (EV) maker would prioritize sales growth ahead of profit in a weak … [+4022 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "nytimes.com",
            "title": "SpaceX’s Starship Rocket Will Try to Launch Again: What to Expect",
            "description": "SpaceX’s Starship Rocket Will Try to Launch Again: What to Expect The company scrubbed a test flight of the most powerful rocket ever to launch on Monday. It’s trying again on Thursday morning. • None The SpaceX Starship spacecraft at the launch stand near Bo…",
            "url": "https://biztoc.com/x/eab2ed6adec8f6ae",
            "urlToImage": "https://c.biztoc.com/p/eab2ed6adec8f6ae/og.webp",
            "publishedAt": "2023-04-20T01:14:06Z",
            "content": "SpaceXs Starship Rocket Will Try to Launch Again: What to Expect The company scrubbed a test flight of the most powerful rocket ever to launch on Monday. Its trying again on Thursday morning.None The… [+303 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Daily Signal"
            },
            "author": "Travis Fisher",
            "title": "‘Car Guy’ Biden Wants to Ban Affordable, Bestselling Cars",
            "description": "President Joe Biden’s Environmental Protection Agency has announced an aggressive new auto tailpipe emissions rule that would ban most new cars and trucks that don’t... Read More\nThe post ‘Car Guy’ Biden Wants to Ban Affordable, Bestselling Cars appeared firs…",
            "url": "https://www.dailysignal.com/2023/04/19/biden-wants-ban-affordable-bestselling-gas-cars/",
            "urlToImage": "https://first-heritage-foundation.s3.amazonaws.com/live_files/2023/04/biden-epa.jpg",
            "publishedAt": "2023-04-20T01:09:20Z",
            "content": "President Joe Bidens Environmental Protection Agency has announced an aggressive new auto tailpipe emissions rule that would ban most new cars and trucks that dont run on batteries. In exchange for r… [+4979 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "techcrunch.com",
            "title": "Elon Musk’s Twitter: Everything you need to know, from layoffs to verification",
            "description": "Welcome to Elon Musk’s Twitter, where the rules are made up and the check marks don’t matter. The Tesla and SpaceX CEO first announced his bid to buy Twitter in April 2022, zealously driven to rid the platform of spam bots and protect free speech. “This is ju…",
            "url": "https://biztoc.com/x/a5a8179ad0d38489",
            "urlToImage": "https://c.biztoc.com/p/a5a8179ad0d38489/og.webp",
            "publishedAt": "2023-04-20T01:00:05Z",
            "content": "Welcome to Elon Musks Twitter, where the rules are made up and the check marks dont matter.The Tesla and SpaceX CEO first announced his bid to buy Twitter in April 2022, zealously driven to rid the p… [+286 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Erickimphotography.com"
            },
            "author": "ERIC KIM",
            "title": "Thoughts on Lasting",
            "description": "Vlog Lasting Long I was randomly playing some songs from Jay Z‘s album 4:44 in my head today, and some thoughts: Will this song, and this album last, or not? Probably not. Why? Jay Z‘s 444 album was kind of a strange album, part apology album for Jay Z contin…",
            "url": "https://erickimphotography.com/blog/2023/04/19/thoughts-on-lasting/",
            "urlToImage": "https://img.youtube.com/vi/DisnNz_tTHc/0.jpg",
            "publishedAt": "2023-04-20T00:58:08Z",
            "content": "Vlog\r\nLasting Long\r\nI was randomly playing some songs from Jay Zs album 4:44 in my head today, and some thoughts:\r\nWill this song, and this album last, or not?\r\nProbably not. Why?\r\nJay Zs 444 album w… [+6978 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Slashdot.org"
            },
            "author": "feedfeeder",
            "title": "Elon Musk signals willingness to sacrifice Tesla margins for market share - Financial Times",
            "description": "Elon Musk signals willingness to sacrifice Tesla margins for market shareFinancial Times Tesla net income and earnings drop more than 20% from last yearCNBC TSLA Slips on Weak Earnings and RevenueTipRanks Tesla's price cuts are coming from a position of stren…",
            "url": "https://slashdot.org/firehose.pl?op=view&amp;id=170791260",
            "urlToImage": null,
            "publishedAt": "2023-04-20T00:53:47Z",
            "content": "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way."
        },
        {
            "source": {
                "id": null,
                "name": "Billings Gazette"
            },
            "author": "AP, CNN",
            "title": "K-Pop star Moonbin dead at 25, Tesla's profit drops sharply, and more of today's trending news",
            "description": "Moon Bin, a member of the popular K-pop group Astro, died Wednesday. He was 25. Get that and more trending topics from today here:",
            "url": "https://billingsgazette.com/news/national/k-pop-star-moonbin-dead-at-25-teslas-profit-drops-sharply-and-more-of-todays/article_c6469842-2d91-50b7-862f-cc0bc89ec1a7.html",
            "urlToImage": "https://bloximages.chicago2.vip.townnews.com/billingsgazette.com/content/tncms/assets/v3/editorial/c/64/c6469842-2d91-50b7-862f-cc0bc89ec1a7/644086afc1049.preview.jpg?crop=631%2C331%2C5%2C75&resize=631%2C331&order=crop%2Cresize",
            "publishedAt": "2023-04-20T00:45:00Z",
            "content": "Here are some trending topics for today, April 19:\r\nMoon Bin, a member of the popular K-pop group Astro, died Wednesday. He was 25.\r\nYonhap News TV, citing an unnamed police source, said the singer a… [+8901 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Roanoke Times"
            },
            "author": "AP, CNN",
            "title": "K-Pop star Moonbin dead at 25, Tesla's profit drops sharply, and more of today's trending news",
            "description": "Moon Bin, a member of the popular K-pop group Astro, died Wednesday. He was 25. Get that and more trending topics from today here:",
            "url": "https://roanoke.com/news/national/k-pop-star-moonbin-dead-at-25-teslas-profit-drops-sharply-and-more-of-todays/article_2f41d556-1d51-59d1-bf47-0164cfbb8677.html",
            "urlToImage": "https://bloximages.newyork1.vip.townnews.com/roanoke.com/content/tncms/assets/v3/editorial/2/f4/2f41d556-1d51-59d1-bf47-0164cfbb8677/644086b93822d.preview.jpg?crop=631%2C331%2C5%2C75&resize=631%2C331&order=crop%2Cresize",
            "publishedAt": "2023-04-20T00:45:00Z",
            "content": "Here are some trending topics for today, April 19:\r\nMoon Bin, a member of the popular K-pop group Astro, died Wednesday. He was 25.\r\nYonhap News TV, citing an unnamed police source, said the singer a… [+8901 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Richmond.com"
            },
            "author": "AP, CNN",
            "title": "K-Pop star Moonbin dead at 25, Tesla's profit drops sharply, and more of today's trending news",
            "description": "Moon Bin, a member of the popular K-pop group Astro, died Wednesday. He was 25. Get that and more trending topics from today here:",
            "url": "https://richmond.com/news/national/k-pop-star-moonbin-dead-at-25-teslas-profit-drops-sharply-and-more-of-todays/article_1f0999c7-62a2-5761-9e5c-646b1e393e8b.html",
            "urlToImage": "https://bloximages.newyork1.vip.townnews.com/richmond.com/content/tncms/assets/v3/editorial/1/f0/1f0999c7-62a2-5761-9e5c-646b1e393e8b/644086b9306d3.preview.jpg?crop=631%2C331%2C5%2C75&resize=631%2C331&order=crop%2Cresize",
            "publishedAt": "2023-04-20T00:45:00Z",
            "content": "Here are some trending topics for today, April 19:\r\nMoon Bin, a member of the popular K-pop group Astro, died Wednesday. He was 25.\r\nYonhap News TV, citing an unnamed police source, said the singer a… [+8838 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Boston Globe"
            },
            "author": null,
            "title": "GE unions approve contract extensions",
            "description": "Stories you may have missed from the world of business.",
            "url": "https://www.bostonglobe.com/2023/04/19/business/ge-unions-approve-contract-extensions/",
            "urlToImage": "https://bostonglobe-prod.cdn.arcpublishing.com/resizer/u4zSwXYxJjhvNIOjt8RMV3FsLhQ=/506x0/cloudfront-us-east-1.images.arcpublishing.com/bostonglobe/PDRTXA3UEYR6K7M65RDXY4N7XE.jpg",
            "publishedAt": "2023-04-20T00:42:45Z",
            "content": "LABOR\r\nMore than 155,000 federal workers in Canada went on strike after wage talks with Prime Minister Justin Trudeaus government failed. The labor disruption is expected to impede government functio… [+5670 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Moneycontrol"
            },
            "author": "Reuters",
            "title": "Dow dips, SP 500 ends flat amid rising fears of economic downturn",
            "description": "Investors are looking for signs in corporate results that inflation may be driving up costs or hurting consumer spending, amid fears the economy may be on the cusp of a downturn",
            "url": "https://www.moneycontrol.com/news/business/markets/dow-dips-sp-500-ends-flat-amid-rising-fears-of-economic-downturn-10443331.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2021/01/Wall-Street_reuters-770x433.jpg",
            "publishedAt": "2023-04-20T00:40:13Z",
            "content": "The S&amp;P 500 ended virtually unchanged on Wednesday, while the Dow dipped as investors digested a mixed bag of corporate earnings, including upbeat reports from medical technology companies, count… [+3264 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "wsj.com",
            "title": "Tesla Counts the Cost of Its Price War",
            "description": "It shouldn’t have been a surprise that big price cuts have a big impact on margins, but such is the magical thinking around Tesla that somehow it was. The electric-vehicle maker reported an 11.4% operating margin for the first quarter, down from 19.2% a year …",
            "url": "https://biztoc.com/x/ed702c5980a2af2b",
            "urlToImage": "https://c.biztoc.com/p/ed702c5980a2af2b/s.webp",
            "publishedAt": "2023-04-20T00:36:05Z",
            "content": "It shouldnt have been a surprise that big price cuts have a big impact on margins, but such is the magical thinking around Tesla that somehow it was.The electric-vehicle maker reported an 11.4% opera… [+230 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Motley Fool"
            },
            "author": "newsfeedback@fool.com (Beth McKenna)",
            "title": "Tesla Earnings Drop 21% Driven By Price Cuts: 7 Metrics You Should See",
            "description": "Tesla stock is down 6% in after-hours trading on Wednesday, as investors are likely unnerved that the Q1 auto gross margin dropped substantially.",
            "url": "https://www.fool.com/investing/2023/04/19/tesla-earnings-drop-21-driven-by-price-cuts-7-metr/",
            "urlToImage": "https://g.foolcdn.com/editorial/images/728874/tsla-stock-tesla-model-y-electric-vehicle.jpg",
            "publishedAt": "2023-04-20T00:27:04Z",
            "content": "Tesla(TSLA -2.02%) stock is down 6% in after-hours trading on Wednesday as of 7:39 p.m. ET, following the electric vehicle pioneer's release of its first-quarter 2023 results. \r\nThe stock's drop is p… [+4220 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "insider@insider.com (Sindhu Sundar)",
            "title": "An AI researcher that Elon Musk hired was arrested in a domestic violence case",
            "description": "Igor Babuschkin, an AI researcher hired by Elon Musk, was arrested in March by police who said they were responding to a \"domestic violence incident.\"",
            "url": "https://www.businessinsider.com/elon-musk-new-ai-researcher-arrested-in-domestic-violence-case-2023-4",
            "urlToImage": "https://i.insider.com/63aeb7ffa51b3d00185b41d4?width=1200&format=jpeg",
            "publishedAt": "2023-04-20T00:24:10Z",
            "content": "Igor Babuschkin, one of Twitter's engineering hires who Elon Musk is reportedly hoping can help him build a competitor to OpenAI's ChatGPT, was arrested in March in what police in Palo Alto, Californ… [+1928 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Freerepublic.com"
            },
            "author": "The Center Square",
            "title": "Hundreds sign up to testify on assault weapons ban during Colorado House hearing",
            "description": "A Colorado House committee on Wednesday began an estimated 12 hours of testimony from approximately 500 witnesses who registered to testify on a bill that would ban the sale of so-called assault weapons in the state. House Bill 23-1230 would prohibit the manu…",
            "url": "https://freerepublic.com/focus/f-bloggers/4146845/posts",
            "urlToImage": null,
            "publishedAt": "2023-04-20T00:07:25Z",
            "content": "Skip to comments.\r\nHundreds sign up to testify on assault weapons ban during Colorado House hearingThe Center Square ^\r\n | 4/19/23\r\n | Joe Mueller\r\nPosted on 04/19/2023 5:07:25 PM PDT by CFW\r\nA Color… [+4761 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "marketwatch.com",
            "title": "Tesla stock falls 6% as price cuts hit quarterly profit margins",
            "description": "Tesla Inc. stock dropped more than 6% in the extended session Wednesday after the electric-vehicle maker narrowly missed quarterly expectations for its revenue and saw adjusted profit margins drop as it cut its EV prices. Tesla TSLA, earned $2.5 billion, or 7…",
            "url": "https://biztoc.com/x/43f1f6d424ccad71",
            "urlToImage": "https://c.biztoc.com/p/43f1f6d424ccad71/og.webp",
            "publishedAt": "2023-04-20T00:02:06Z",
            "content": "Tesla Inc. stock dropped more than 6% in the extended session Wednesday after the electric-vehicle maker narrowly missed quarterly expectations for its revenue and saw adjusted profit margins drop as… [+309 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Dana Hull and Sean O'Kane",
            "title": "Tesla’s Not Done Cutting Prices as It Protects Lead in EVs",
            "description": "(Bloomberg) -- Elon Musk signaled Tesla Inc. will continue to cut prices to stoke demand for its electric vehicles, even at the expense of its industry...",
            "url": "https://finance.yahoo.com/news/tesla-misses-first-quarter-estimates-202015555.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/7ta0OmeiMzzHXTv89gWHOw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/bloomberg_markets_842/3122c57c6e41d3a81ba1d555d1752804",
            "publishedAt": "2023-04-19T23:57:03Z",
            "content": "(Bloomberg) -- Elon Musk signaled Tesla Inc. will continue to cut prices to stoke demand for its electric vehicles, even at the expense of its industry-leading profit margins.\r\nMost Read from Bloombe… [+4201 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Slashdot.org"
            },
            "author": "feedfeeder",
            "title": "Tesla Stock Drops. Earnings Show It's Just a Car Maker. - Barron's",
            "description": "Tesla Stock Drops. Earnings Show It's Just a Car Maker.Barron's Tesla net income and earnings drop more than 20% from last yearCNBC Tesla earnings: Q1 revenue, profit miss estimates; gross margin dips to 19.3% on price cutsYahoo Finance Tesla Earnings: Profit…",
            "url": "https://slashdot.org/firehose.pl?op=view&amp;id=170791016",
            "urlToImage": null,
            "publishedAt": "2023-04-19T23:53:48Z",
            "content": "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way."
        },
        {
            "source": {
                "id": null,
                "name": "MarketWatch"
            },
            "author": "Joy Wiltermuth",
            "title": "Inflation is the ‘one thing’ holding up revenue growth, warns Morgan Stanley’s Wilson of a potential selloff in stocks",
            "description": "Mike Wilson, chief U.S. equity strategist at Morgan Stanley, warns stock-market investors against cheering cooler inflation.",
            "url": "https://www.marketwatch.com/story/inflation-is-the-one-thing-holding-up-revenue-growth-warns-morgan-stanleys-wilson-of-a-potential-selloff-in-stocks-9e5e140c",
            "urlToImage": "https://images.mktw.net/im-766859/social",
            "publishedAt": "2023-04-19T23:47:00Z",
            "content": "Be careful what you wish for. Thats Morgan Stanleys Mike Wilson, chief U.S. equity strategist, warning investors on Wednesday of the hazards of cheering recently cooler inflation data. While price pr… [+2482 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "yahoo.com",
            "title": "Microsoft Removes Twitter From Ad Program; Musk Threatens Suit",
            "description": "Microsoft Corp. said its social media planning and scheduling tools for advertisers will no longer support Twitter, after the Elon Musk-owned social network started charging for access to its programming interface. • None Tesla Slashes Prices of Key Models Ag…",
            "url": "https://biztoc.com/x/4cc27e27f79adb43",
            "urlToImage": "https://c.biztoc.com/p/4cc27e27f79adb43/og.webp",
            "publishedAt": "2023-04-19T23:38:05Z",
            "content": "Microsoft Corp. said its social media planning and scheduling tools for advertisers will no longer support Twitter, after the Elon Musk-owned social network started charging for access to its program… [+291 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "yahoo.com",
            "title": "US Treasury’s Cash Pile Jumps $108 Billion on Tax Day",
            "description": "Uncertainty continues to linger about whether or not the US will make it through to late summer without risking a debt-ceiling-related default after figures indicating the size of the Treasury’s tax day cash influx were somewhat lackluster. • None Tesla Slash…",
            "url": "https://biztoc.com/x/650f4b6aec266fb7",
            "urlToImage": "https://c.biztoc.com/p/650f4b6aec266fb7/og.webp",
            "publishedAt": "2023-04-19T23:38:04Z",
            "content": "Uncertainty continues to linger about whether or not the US will make it through to late summer without risking a debt-ceiling-related default after figures indicating the size of the Treasurys tax d… [+337 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Slashdot.org"
            },
            "author": "feedfeeder",
            "title": "Dow Jones Futures: Tesla Falls As Gross Margins, Free Cash Flow Dive | Investor's Business Daily - Investor's Business Daily",
            "description": "Dow Jones Futures: Tesla Falls As Gross Margins, Free Cash Flow Dive | Investor's Business DailyInvestor's Business Daily Stocks making the biggest moves premarket: United Airlines, Netflix, Morgan Stanley and moreCNBC Netflix earnings breakdown, United Airli…",
            "url": "https://slashdot.org/firehose.pl?op=view&amp;id=170790926",
            "urlToImage": null,
            "publishedAt": "2023-04-19T23:34:28Z",
            "content": "He:Let's end it all, bequeathin' our brains to science.\r\nShe:What?!? Science got enough trouble with their OWN brains.\r\n-- Walt Kelly"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Andrew J. Hawkins",
            "title": "Elon Musk announces Tesla Cybertruck delivery event in third quarter of 2023",
            "description": "Tesla will hold a delivery event for the Cybertruck in the third quarter of 2023, Elon Musk said in an earnings call. The polarizing electric truck is expected to start production in summer 2023.",
            "url": "https://www.theverge.com/2023/4/19/23690346/elon-musk-tesla-cybertruck-delivery-event-q3-2023",
            "urlToImage": null,
            "publishedAt": "2023-04-19T23:21:08Z",
            "content": "Elon Musk announces Tesla Cybertruck delivery event in third quarter of 2023\r\nElon Musk announces Tesla Cybertruck delivery event in third quarter of 2023\r\n / This is really a very radical product, M… [+1405 chars]"
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "Musk's Price War Leaves Tesla With Self-Inflicted Wounds - Bloomberg",
            "description": "Musk's Price War Leaves Tesla With Self-Inflicted Wounds  Bloomberg",
            "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMibmh0dHBzOi8vd3d3LmJsb29tYmVyZy5jb20vb3Bpbmlvbi9hcnRpY2xlcy8yMDIzLTA0LTE5L211c2stcy1wcmljZS13YXItbGVhdmVzLXRlc2xhLXdpdGgtc2VsZi1pbmZsaWN0ZWQtd291bmRz0gEA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
            "urlToImage": null,
            "publishedAt": "2023-04-19T23:19:04Z",
            "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Investing.com"
            },
            "author": "Investing.com",
            "title": "Dow futures dip, Tesla sheds 5.9% after earnings",
            "description": "Dow futures dip, Tesla sheds 5.9% after earnings",
            "url": "https://www.investing.com/news/stock-market-news/dow-futures-dip-tesla-sheds-59-after-earnings-3059912",
            "urlToImage": "https://i-invdn-com.investing.com/news/LYNXMPEB110XX_L.jpg",
            "publishedAt": "2023-04-19T23:18:02Z",
            "content": "By Oliver Gray\r\nInvesting.com - U.S. stock futures were trading lower during Wednesday's evening trade, after a mixed session among major benchmark averages as investors closely monitored earnings re… [+1584 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hollywood Life"
            },
            "author": "Sabrina Picou",
            "title": "Elon Musk Plays With His & Grimes’ Two-Year-Old Son, X AE A-XII, In Rare New Photos",
            "description": "Amid a work conference, Elon Musk, adorably featured his son, X AE A-XII, as his surprise guest while working in Miami on Apr. 18.",
            "url": "https://hollywoodlife.com/2023/04/19/elon-musk-grimes-son-new-photos/",
            "urlToImage": "https://hollywoodlife.com/wp-content/uploads/2023/04/elon-musk-son-mega-ftr.jpg",
            "publishedAt": "2023-04-19T23:16:08Z",
            "content": "View galleryImage Credit: MEGA\r\nTake your baby to work day! CEO of Twitter, Elon Musk, 51, was working in Miami on Tuesday and surprised the audience by bringing his and Grimes two-year-old son, X AE… [+2943 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "investors.com",
            "title": "Futures: Tesla Falls As Price Cuts Slam Margins, Cash Flow",
            "description": "Dow Jones futures fell slightly after hours, along with S&P 500 futures and Nasdaq futures. Tesla (TSLA) declined solidly late Wednesday as earnings fell solidly on big price cuts, with gross margins and free cash flow tumbling far more than expected. Lam Res…",
            "url": "https://biztoc.com/x/050e1698a758bc0d",
            "urlToImage": "https://c.biztoc.com/p/050e1698a758bc0d/og.webp",
            "publishedAt": "2023-04-19T23:06:15Z",
            "content": "Dow Jones futures fell slightly after hours, along with S&amp;P 500 futures and Nasdaq futures. Tesla (TSLA) declined solidly late Wednesday as earnings fell solidly on big price cuts, with gross mar… [+312 chars]"
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "Tesla Stock Drops. Earnings Show It's Just a Car Maker. - Barron's",
            "description": "<ol><li>Tesla Stock Drops. Earnings Show It's Just a Car Maker.  Barron's\r\n</li><li>Tesla net income and earnings drop more than 20% from last year  CNBC\r\n</li><li>Tesla earnings: Q1 revenue, profit miss estimates; gross margin dips to 19.3% on price cuts  Ya…",
            "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiRGh0dHBzOi8vd3d3LmJhcnJvbnMuY29tL2FydGljbGVzL3Rlc2xhLWVhcm5pbmdzLXN0b2NrLXByaWNlLTg3NDA4MmM20gFIaHR0cHM6Ly93d3cuYmFycm9ucy5jb20vYW1wL2FydGljbGVzL3Rlc2xhLWVhcm5pbmdzLXN0b2NrLXByaWNlLTg3NDA4MmM2?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
            "urlToImage": null,
            "publishedAt": "2023-04-19T23:05:00Z",
            "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "go.com",
            "title": "Price cuts cause Tesla 1Q income, profit margins to fall",
            "description": "DETROIT -- Price reductions across the model lineup cut into Tesla's first-quarter net income, causing it to fall 24% from a year ago. The Austin, Texas, electric car and solar panel company said Wednesday it made $2.51 billion from January through March, dow…",
            "url": "https://biztoc.com/x/40ee419212fe9a3e",
            "urlToImage": "https://c.biztoc.com/p/40ee419212fe9a3e/og.webp",
            "publishedAt": "2023-04-19T23:04:05Z",
            "content": "DETROIT -- Price reductions across the model lineup cut into Tesla's first-quarter net income, causing it to fall 24% from a year ago.The Austin, Texas, electric car and solar panel company said Wedn… [+285 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Graham Cluley Security News"
            },
            "author": "Graham Cluley",
            "title": "Smashing Security podcast #318: Tesla workers spy on drivers, and Operation Fox Hunt scams",
            "description": "Graham wonders what would happen if his bouncing buttocks were captured on camera by a Tesla employee, and we take a look at canny scams connected to China's Operation Fox Hunt.\n\nAll this and more is discussed in the latest edition of the \"Smashing Security\" …",
            "url": "https://grahamcluley.com/smashing-security-podcast-318/",
            "urlToImage": "https://grahamcluley.com/wp-content/uploads/2023/04/ss-episode-318.jpeg",
            "publishedAt": "2023-04-19T23:01:01Z",
            "content": "Graham wonders what would happen if his bouncing buttocks were captured on camera by a Tesla employee, and we take a look at canny scams connected to China’s Operation Fox Hunt.\r\nAll this and more is… [+1696 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Howard Mustoe",
            "title": "Interest in electric cars slumps by two thirds as high prices wipe out savings",
            "description": "Interest in electric cars has slumped as electricity prices and falling petrol costs have erased the benefits of owning a plug-in.",
            "url": "https://finance.yahoo.com/news/interest-electric-cars-slumps-two-230100303.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/cSAUljGpyh250I32sjy5TQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03NTA-/https://media.zenfs.com/en/the_telegraph_258/7d3438246235c137c9e0cee42e0152a3",
            "publishedAt": "2023-04-19T23:01:00Z",
            "content": "New battery-powered vehicles are becoming more expensive than petrol and diesel models - John Walton/PA Wire\r\nInterest in electric cars has slumped as electricity prices and falling petrol costs have… [+2496 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Investopedia"
            },
            "author": "Kevin George",
            "title": "Tesla Drops 4.5% After Hours as Margins Disappoint",
            "description": "Tesla shares dropped as much as 4.5% in after-hours trading after the company reported margins took a hit from a series of price cuts in the first quarter.",
            "url": "https://www.investopedia.com/tesla-margins-disappoint-7482828",
            "urlToImage": "https://www.investopedia.com/thmb/n_7RmMoa4tLHGLN9xLu5bfKLGNs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1473986306-1c355f6f5b434484ab3d3eac0aed3c46.jpg",
            "publishedAt": "2023-04-19T23:00:17Z",
            "content": "Tesla (TSLA) shares dropped as much as 4.5% in after-hours trading after the company reported profits fell in the first quarter, with a series of price cuts taking a toll on margins.\r\n<ul><li>Tesla r… [+2063 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Investopedia"
            },
            "author": "Kevin George",
            "title": "Tesla Drops 4.5% After Hours as Margins Disappoint",
            "description": "Tesla shares dropped as much as 4.5% in after-hours trading after the company reported margins took a hit from a series of price cuts in the first quarter.",
            "url": "https://www.investopedia.com/tesla-margins-disappoint-7482828",
            "urlToImage": "https://www.investopedia.com/thmb/n_7RmMoa4tLHGLN9xLu5bfKLGNs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1473986306-1c355f6f5b434484ab3d3eac0aed3c46.jpg",
            "publishedAt": "2023-04-19T23:00:17Z",
            "content": "Tesla (TSLA) shares dropped as much as 4.5% in after-hours trading after the company reported profits fell in the first quarter, with a series of price cuts taking a toll on margins.\r\n<ul><li>Tesla r… [+2063 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "cnbc.com",
            "title": "Elon Musk threatens to sue Microsoft over using Twitter data for its A.I",
            "description": "Twitter CEO Elon Musk threatened to sue Microsoft on Wednesday, accusing the software giant of illegally using the social media company's data to train its artificial intelligence model. Musk's threat by tweet came after Mashable and other publications report…",
            "url": "https://biztoc.com/x/ca414b0b35e70d06",
            "urlToImage": "https://c.biztoc.com/p/ca414b0b35e70d06/og.webp",
            "publishedAt": "2023-04-19T22:56:05Z",
            "content": "Twitter CEO Elon Musk threatened to sue Microsoft on Wednesday, accusing the software giant of illegally using the social media company's data to train its artificial intelligence model.Musk's threat… [+297 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Slashdot.org"
            },
            "author": "feedfeeder",
            "title": "Stocks making the biggest moves midday: Rivian, Western Alliance, Peloton and more - CNBC",
            "description": "Stocks making the biggest moves midday: Rivian, Western Alliance, Peloton and moreCNBC Dow Jones Futures: Tesla Falls As Gross Margins, Free Cash Flow Dive | Investor's Business DailyInvestor's Business Daily Netflix earnings breakdown, United Airlines predic…",
            "url": "https://slashdot.org/firehose.pl?op=view&amp;id=170790732",
            "urlToImage": null,
            "publishedAt": "2023-04-19T22:53:10Z",
            "content": "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way."
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "fortune.com",
            "title": "Assault charges are dropped against CEO who gained fame for raising his employees’ salaries while slashing his own by over 90%",
            "description": "Seattle prosecutors on Wednesday dropped a misdemeanor charge that former celebrity chief executive Dan Price grabbed a woman’s throat after attempting kiss her, citing problems in proving their case, court records show. Price, 38, gained national attention f…",
            "url": "https://biztoc.com/x/e37776630e4a361e",
            "urlToImage": "https://c.biztoc.com/p/e37776630e4a361e/og.webp",
            "publishedAt": "2023-04-19T22:50:04Z",
            "content": "Seattle prosecutors on Wednesday dropped a misdemeanor charge that former celebrity chief executive Dan Price grabbed a womans throat after attempting kiss her, citing problems in proving their case,… [+280 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Kif Leswing",
            "title": "Elon Musk threatens to sue Microsoft over using Twitter data for its A.I.",
            "description": "Twitter CEO Elon Musk threatened Microsoft with a potential lawsuit on Wednesday, claiming the software giant used his company's data to train its AI.",
            "url": "https://www.cnbc.com/2023/04/19/musk-threatens-to-sue-microsoft-over-twitter-data-being-used-in-ai.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107227255-1681841318474-gettyimages-1251871128-PGONCHAR_1045.jpeg?v=1681944489&w=1920&h=1080",
            "publishedAt": "2023-04-19T22:48:00Z",
            "content": "Twitter CEO Elon Musk threatened to sue Microsoft on Wednesday, accusing the software giant of illegally using the social media company's data to train its artificial intelligence model.\r\nMusk's thre… [+2466 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "bostonherald.com",
            "title": "Ticker: Extra COVID-19 booster now open to some; Tesla 1Q income, profit margins to fall",
            "description": "Older Americans and people with weak immune systems can get an extra COVID-19 booster dose this spring. The Centers for Disease Control and Prevention on Wednesday signed off on a more flexible booster schedule for people who remain at the highest risk from C…",
            "url": "https://biztoc.com/x/4cd8ca4061eb6b33",
            "urlToImage": "https://c.biztoc.com/p/4cd8ca4061eb6b33/og.webp",
            "publishedAt": "2023-04-19T22:42:20Z",
            "content": "Older Americans and people with weak immune systems can get an extra COVID-19 booster dose this spring.The Centers for Disease Control and Prevention on Wednesday signed off on a more flexible booste… [+255 chars]"
        },
        {
            "source": {
                "id": "fortune",
                "name": "Fortune"
            },
            "author": "The Associated Press",
            "title": "Assault charges are dropped against CEO who gained fame for raising his employees’ salaries while slashing his own by over 90%",
            "description": "Dan Price, former CEO of Gravity Payments, was accused of assaulting a woman and reckless driving in February 2022.",
            "url": "https://fortune.com/2023/04/19/gravity-payments-dan-price-assault-charges-are-dropped/",
            "urlToImage": "https://content.fortune.com/wp-content/uploads/2023/04/GettyImages-1245848045.jpg?resize=1200,600",
            "publishedAt": "2023-04-19T22:41:48Z",
            "content": "Seattle prosecutors on Wednesday dropped a misdemeanor charge that former celebrity chief executive Dan Price grabbed a womans throat after attempting kiss her, citing problems in proving their case,… [+2409 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Boston Herald"
            },
            "author": "The Associated Press",
            "title": "Ticker: Extra COVID-19 booster now open to some; Tesla 1Q income, profit margins to fall",
            "description": "Ticker: Extra COVID-19 booster now open to some; Tesla 1Q income, profit margins to fall",
            "url": "https://www.bostonherald.com/2023/04/19/ticker-extra-covid-19-booster-now-open-to-some-tesla-1q-income-profit-margins-to-fall/",
            "urlToImage": "https://www.bostonherald.com/wp-content/uploads/2023/04/SJM-L-VARIANTS-1022-04.jpeg?w=1024&h=682",
            "publishedAt": "2023-04-19T22:40:28Z",
            "content": "Older Americans and people with weak immune systems can get an extra COVID-19 booster dose this spring.\r\nThe Centers for Disease Control and Prevention on Wednesday signed off on a more flexible boos… [+1250 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Rolling Stone"
            },
            "author": "CT Jones",
            "title": "He Reported on a Twitter Hack. Musk’s Free Speech Haven Kicked Him Out",
            "description": "Wired reporter Dell Cameron was permanently suspended from Twitter Wednesday after reporting on the Matt Walsh Twitter hack",
            "url": "https://www.rollingstone.com/culture/culture-news/matt-walsh-wired-reporter-dell-cameron-twitter-suspension-1234720045/",
            "urlToImage": "https://www.rollingstone.com/wp-content/uploads/2023/04/elon-musk-2023-RS-1800.jpg?crop=0px%2C16px%2C1800px%2C1014px&resize=1600%2C900",
            "publishedAt": "2023-04-19T22:39:33Z",
            "content": "Another day in Muskland, and this time, Twitter’s arbitrary scope has landed on Wired reporter Dell Cameron. The journalist was permanently suspended from Twitter Wednesday, after reporting on the ha… [+2875 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "foxbusiness.com",
            "title": "Latest Stock Market News today: End of discs at Netflix, Southwest fallout",
            "description": "Tesla Inc missed market estimates for first-quarter margin on Wednesday, throttled by a series of aggressive price cuts meant to spur demand in a sagging economy and fend off rising competition. Elon Musk-led Tesla reported total gross margin of 19.3%, compar…",
            "url": "https://biztoc.com/x/a2074e4380231fa0",
            "urlToImage": "https://c.biztoc.com/p/a2074e4380231fa0/og.webp",
            "publishedAt": "2023-04-19T22:38:07Z",
            "content": "Tesla Inc missed market estimates for first-quarter margin on Wednesday, throttled by a series of aggressive price cuts meant to spur demand in a sagging economy and fend off rising competition.Elon … [+285 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Richard Henderson",
            "title": "Asia to See Cautious Open on Mixed Earnings, Rates: Markets Wrap",
            "description": "(Bloomberg) -- Shares in Asia are primed for a steady opening while US equity futures fell after stocks closed little changed on Wall Street and a gauge of...",
            "url": "https://finance.yahoo.com/news/asia-see-cautious-open-mixed-223347388.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/8sbicDPaIWPGc.Hpfs1rUA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/bloomberg_markets_842/a223527233ee09d88ce3d1115a572cac",
            "publishedAt": "2023-04-19T22:33:47Z",
            "content": "(Bloomberg) -- Shares in Asia are primed for a steady opening while US equity futures fell after stocks closed little changed on Wall Street and a gauge of volatility slid to the lowest level in more… [+3407 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Slashdot.org"
            },
            "author": "feedfeeder",
            "title": "Tesla Earnings: Profit Drops 24% After Price Cuts - The Wall Street Journal",
            "description": "Tesla Earnings: Profit Drops 24% After Price CutsThe Wall Street Journal Tesla net income and earnings drop more than 20% from last yearCNBC Trading Strategies For Tesla Stock Before And After Q1 Earnings - Tesla (NASDAQ:TSLA)Benzinga Tesla earnings: Q1 reven…",
            "url": "https://slashdot.org/firehose.pl?op=view&amp;id=170790616",
            "urlToImage": null,
            "publishedAt": "2023-04-19T22:33:47Z",
            "content": "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way."
        },
        {
            "source": {
                "id": null,
                "name": "Slashdot.org"
            },
            "author": "feedfeeder",
            "title": "Latest Stock Market News today: End of discs at Netflix, Southwest fallout | April 19, 2023 || Live Updates from - Fox Business",
            "description": "Latest Stock Market News today: End of discs at Netflix, Southwest fallout | April 19, 2023 || Live Updates fromFox Business Stocks making the biggest moves after hours: Tesla, Las Vegas Sands, IBM and moreCNBC Dow Jones Falls: Netflix Slides On Q1 Results, T…",
            "url": "https://slashdot.org/firehose.pl?op=view&amp;id=170790614",
            "urlToImage": null,
            "publishedAt": "2023-04-19T22:33:30Z",
            "content": "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way."
        },
        {
            "source": {
                "id": null,
                "name": "Jalopnik"
            },
            "author": "José Rodríguez Jr.",
            "title": "A 1909 Baker Electric Shows Donut Media That a 100-Year-Old EV Still Holds Up",
            "description": "Even though the inventions of Rudolf Diesel and Henry Ford are seen as some of the earliest and most crucial developments in the world of automobiles — much to the chagrin of Cugnot fans everywhere — fully-electric cars are often overlooked as the pioneers of…",
            "url": "https://jalopnik.com/watch-donut-media-drive-100-year-old-ev-works-just-fine-1850354711",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/e1dbd155efb48fb280bc0cd1596842c4.png",
            "publishedAt": "2023-04-19T22:30:00Z",
            "content": "Even though the inventions of Rudolf Diesel and Henry Ford are seen as some of the earliest and most crucial developments in the world of automobiles much to the chagrin of Cugnot fans everywhere ful… [+2356 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Investopedia"
            },
            "author": "Staff Author",
            "title": "Markets Flat Following Bank and Healthcare Earnings",
            "description": "U.S. equities indexes finished flat on April 19, 2023, after another round of mixed earnings reports.",
            "url": "https://www.investopedia.com/markets-flat-following-bank-and-healthcare-earnings-7482893",
            "urlToImage": "https://www.investopedia.com/thmb/oxDz9PeO4ejwaiz9rt7dSfrihIk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/indexesapril19-5e9ce2cada6a4405926ded76fae59281.png",
            "publishedAt": "2023-04-19T22:29:03Z",
            "content": "<ul><li>U.S. equities indexes ended mostly flat on April 19, 2023, as the market digested earnings reports from more key companies.</li><li>The Dow ended Wednesday's session around 0.2% lower, while … [+1903 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Electrek"
            },
            "author": "Fred Lambert",
            "title": "Elon Musk announces timing for Tesla Cybertruck delivery event",
            "description": "Elon Musk announced that Tesla is planning to hold a Tesla Cybertruck delivery event at the “end of the third quarter.”\n more…\nThe post Elon Musk announces timing for Tesla Cybertruck delivery event appeared first on Electrek.",
            "url": "https://electrek.co/2023/04/19/elon-musk-announces-tesla-cybertruck-delivery-event/",
            "urlToImage": "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2023/04/Tesla-Cybertruck-Winter-testing.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2023-04-19T22:28:29Z",
            "content": "Elon Musk announced that Tesla is planning to hold a Tesla Cybertruck delivery event at the “end of the third quarter.”\r\nThe Tesla Cybertruck is one of the most anticipated Tesla products and also on… [+1934 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "yahoo.com",
            "title": "Stocks trending in after-hours: Tesla, IBM, Alcoa, Las Vegas Sands",
            "description": "These are some of the stocks moving in after-hours on April 19, 2023: Tesla (TSLA) shares sank 2% immediately following its first-quarter results. The EV maker’s adjusted earnings per share of 85 cents was a penny off the average analyst estimate of 86 cents.…",
            "url": "https://biztoc.com/x/bed622c1c49529c9",
            "urlToImage": "https://c.biztoc.com/p/bed622c1c49529c9/og.webp",
            "publishedAt": "2023-04-19T22:28:04Z",
            "content": "These are some of the stocks moving in after-hours on April 19, 2023:Tesla (TSLA) shares sank 2% immediately following its first-quarter results. The EV makers adjusted earnings per share of 85 cents… [+305 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Star Online"
            },
            "author": "Wu Xiaoling",
            "title": "Tesla reports revenues increase, net income decline in first quarter",
            "description": "SAN FRANCISCO, April 19 (Xinhua) -- U.S. electric vehicle maker Tesla said Wednesday that it earned 23.3 billion U.S. dollars in total revenues in the first quarter of fiscal 2023, up 24 percent over the previous year. Read full story",
            "url": "https://www.thestar.com.my/news/world/2023/04/20/tesla-reports-revenues-increase-net-income-decline-in-first-quarter",
            "urlToImage": "https://cdn.thestar.com.my/Themes/img/newTsol_logo_socmedia.png",
            "publishedAt": "2023-04-19T22:27:00Z",
            "content": "SAN FRANCISCO, April 19 (Xinhua) -- U.S. electric vehicle maker Tesla said Wednesday that it earned 23.3 billion U.S. dollars in total revenues in the first quarter of fiscal 2023, up 24 percent over… [+1410 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Marketscreener.com"
            },
            "author": "MarketScreener",
            "title": "ELON MUSK SAYS TESLA HAS SHOT OF ACHIEVING 2 MLN VEHICLE PRODUCT…",
            "description": "(marketscreener.com) \n ELON MUSK SAYS TESLA HAS SHOT OF ACHIEVING 2 MLN VEHICLE PRODUCTION IN \"UPSIDE CASE\", COMFORTABLE WITH 1.8 MLN DELIVERY TARGET THIS YEAR\n https://www.marketscreener.com/quote/stock/TESLA-INC-6344549/news/ELON-MUSK-SAYS-TESLA-HAS-SHOT-OF…",
            "url": "https://www.marketscreener.com/quote/stock/TESLA-INC-6344549/news/ELON-MUSK-SAYS-TESLA-HAS-SHOT-OF-ACHIEVING-2-MLN-VEHICLE-PRODUCT-8230-43547023/?utm_medium=RSS&utm_content=20230419",
            "urlToImage": "https://www.marketscreener.com/images/twitter_MS_fdnoir.png",
            "publishedAt": "2023-04-19T22:19:29Z",
            "content": "ELON MUSK SAYS TESLA HAS SHOT OF ACHIEVING 2 MLN VEHICLE PRODUCTION IN \"UPSIDE CASE\", COMFORTABLE WITH 1.8 MLN DELIVERY TARGET THIS YEAR"
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "Tesla is a victim of a price war it started - CNN",
            "description": "Tesla is a victim of a price war it started  CNN",
            "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiQWh0dHBzOi8vd3d3LmNubi5jb20vMjAyMy8wNC8xOS9idXNpbmVzcy90ZXNsYS1lYXJuaW5ncy9pbmRleC5odG1s0gFFaHR0cHM6Ly9hbXAuY25uLmNvbS9jbm4vMjAyMy8wNC8xOS9idXNpbmVzcy90ZXNsYS1lYXJuaW5ncy9pbmRleC5odG1s?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
            "urlToImage": null,
            "publishedAt": "2023-04-19T22:18:00Z",
            "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "Tesla is a victim of a price war it started - CNN",
            "description": "Tesla is a victim of a price war it started  CNN",
            "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiQWh0dHBzOi8vd3d3LmNubi5jb20vMjAyMy8wNC8xOS9idXNpbmVzcy90ZXNsYS1lYXJuaW5ncy9pbmRleC5odG1s0gEA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
            "urlToImage": null,
            "publishedAt": "2023-04-19T22:18:00Z",
            "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "thestreet.com",
            "title": "Elon Musk Reveals Delivery Date of the Cybertruck",
            "description": "Tesla will deliver the very first copies of its long-awaited pickup truck at the end of the third quarter, the chief executive said on April 19. The wait is almost over. Nearly four years after the presentation of the Cybertruck, the very first pickup truck f…",
            "url": "https://biztoc.com/x/f3852bd6ddaf5382",
            "urlToImage": "https://c.biztoc.com/p/f3852bd6ddaf5382/og.webp",
            "publishedAt": "2023-04-19T22:16:15Z",
            "content": "Tesla will deliver the very first copies of its long-awaited pickup truck at the end of the third quarter, the chief executive said on April 19.The wait is almost over. Nearly four years after the pr… [+297 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "wsj.com",
            "title": "Tesla Earnings Dented by Price Cuts",
            "description": "Tesla felt the pain of a recent wave of price cuts, as a reduction in the average price of its cars contributed to a 24% decline in first-quarter profit. #tesla",
            "url": "https://biztoc.com/x/04a8033461e3137e",
            "urlToImage": "https://c.biztoc.com/p/04a8033461e3137e/og.webp",
            "publishedAt": "2023-04-19T22:16:04Z",
            "content": "Tesla felt the pain of a recent wave of price cuts, as a reduction in the average price of its cars contributed to a 24% decline in first-quarter profit. \r\n#tesla\r\n This story appeared on wsj.com, 20… [+8 chars]"
        },
        {
            "source": {
                "id": "politico",
                "name": "Politico"
            },
            "author": "By Caitlin Oprysko",
            "title": "What K Street is telling clients about the debt limit fight",
            "description": "Apart from the debt ceiling, both memos also attempt to game out other legislative possibilities over the coming months, in particular where there’s a shot at bipartisan movement.",
            "url": "https://www.politico.com/newsletters/politico-influence/2023/04/19/what-k-street-is-telling-clients-about-the-debt-limit-fight-00092918",
            "urlToImage": "https://static.politico.com/da/f5/44342c424c68b675719324b1106b/politico.jpg",
            "publishedAt": "2023-04-19T22:15:00Z",
            "content": "With Daniel Lippman \r\nK STREET GAMES OUT THE DEBT LIMIT FIGHT: Congress returned to town this week after an extended absence and after getting off to a slow start this year, K Street is puzzling out … [+24608 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "nikkei.com",
            "title": "Tesla profit falls 24% in Q1 after price cuts in China, other markets",
            "description": "PALO ALTO, U.S. -- Tesla reported lackluster first quarter results after the bell Wednesday, with net income dropping sharply after the American electric vehicle maker cut prices in several markets including China and the U.S. For the three months ended March…",
            "url": "https://biztoc.com/x/7e97e273f3d213b1",
            "urlToImage": "https://c.biztoc.com/p/7e97e273f3d213b1/og.webp",
            "publishedAt": "2023-04-19T22:12:05Z",
            "content": "PALO ALTO, U.S. -- Tesla reported lackluster first quarter results after the bell Wednesday, with net income dropping sharply after the American electric vehicle maker cut prices in several markets i… [+227 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Ines Ferré",
            "title": "Stocks trending in after-hours: Tesla, IBM, Alcoa, Las Vegas Sands",
            "description": "These are the stocks moving in after-hours on April 19, 2023.",
            "url": "https://finance.yahoo.com/news/stocks-trending-in-after-hours-tesla-ibm-alcoa-las-vegas-sands-220906479.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/hsLyQCJcHj_.CNJhfGx5Qg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD0xMDAx/https://s.yimg.com/os/creatr-uploaded-images/2023-04/992a6250-defc-11ed-b68e-e8dd64603664",
            "publishedAt": "2023-04-19T22:09:06Z",
            "content": "These are some of the stocks moving in after-hours on April 19, 2023:\r\nTesla \r\nTesla (TSLA) shares sank 2% immediately following its first-quarter results. The EV makers adjusted earnings per share o… [+4192 chars]"
        }

    ]
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1
        }
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=3ea0f0fa287841c6adcd8936ec0fd6de&page=1&pageSize=20";
        let data = await fetch(url);
        let parsedata = await data.json()
        this.setState({ articles: parsedata.articles, totalResults: parsedata.totalResults })
    }

    handlePre = async () => {
        let url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=3ea0f0fa287841c6adcd8936ec0fd6de&page=${this.state.page - 1}&pageSize=20`;
        let data = await fetch(url);
        let parsedata = await data.json()
        this.setState({
            page: this.state.page - 1,
            articles: parsedata.articles
        })
    }
    static propTypes={
        country: propTypes.string,
        category: propTypes.string
    }

    handleNext = async () => {
            let url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=3ea0f0fa287841c6adcd8936ec0fd6de&page=${this.state.page + 1}&pageSize=20`;
            let data = await fetch(url);
            let parsedata = await data.json()
            this.setState({
                page: this.state.page + 1,
                articles: parsedata.articles
            })
    }

    render() {
        return (
            <div className='PreNext'>
                <h1 className='heading'>Top Headings</h1>
                <div className='news-list'>
                    {this.state.articles.map((element, ind) => {
                        return <NewsItem mode={this.props.mode} key={ind} title={element.title.slice(0, 50)} description={element.description.slice(0, 100)} imgUrl={element.urlToImage} newsUrl={element.url} />
                    })}
                </div>
                <button disabled={this.state.page <= 1} className='pre' type='button' onClick={this.handlePre}> &larr; Previous</button>
                <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/51)} className='next' type='button' onClick={this.handleNext}>  Next &rarr;</button>
            </div>
        )
    }
}

export default News
