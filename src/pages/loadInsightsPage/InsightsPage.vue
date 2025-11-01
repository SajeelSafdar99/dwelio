<template>
  <section class="featured-insights q-py-lg" ref="target6">
    <div class="container insights-content">

      <div class="row insights-grid q-col-gutter-lg">
        <div class="col-12 col-md-4" v-for="(insight, index) in insights" :key="index">
          <div class="insight-card">
            <div class="card-image-container">
              <img :src="insight.image" :alt="insight.title" class="img-fluid mx-auto d-block insight-image" />
            </div>
            <div class="card-content">
              <h3 class="insight-title">
                <span class="insight-title-text">{{ insight.title }}</span>
                <span class="title-arrow">
                  <q-icon name="north_east" size="16px" class="text-white" />
                </span>
              </h3>
              <p class="insight-description">{{ insight.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { shallowRef } from 'vue'
const target6 = shallowRef(null)

const insights = [
  {
    title: "15 Biggest Surprises About Owning a Home",
    description: "Buying a home is a huge milestone, but it also comes with unexpected challenges. Many first-time homeowners underestimate the hidden costs and responsibilities that come",
    image: "https://dwelio.org/wp-content/uploads/2025/09/Surprises-About-Owning-a-Home.webp"
  },
  {
    title: "How to Buy a House With Low Income?",
    description: "Owning a home is a dream for many, but if your income is limited, it may feel out of reach. The good news is, buying",
    image: "https://dwelio.org/wp-content/uploads/2025/09/Buy-a-House-With-Low-Income.jpg"
  },
  {
    title: "How to Buy a House at Auction?",
    description: "Buying a house at auction can be an exciting opportunity to secure property at a lower price, but it comes with unique risks and challenges.",
    image: "https://dwelio.org/wp-content/uploads/2025/09/Buy-a-House-at-Auction.jpg"
  },
  {
    title: "Should I Sell to a Home Investor?",
    description: "Selling your home is a big decision, and one of the first questions many homeowners ask is whether they should sell traditionally through an agent",
    image: "https://dwelio.org/wp-content/uploads/2025/09/Sell-to-a-Home-Investor.png"
  },
  {
    title: "What Are Real Estate Contingencies?",
    description: "Buying or selling a home is one of the biggest financial transactions most people will make. To protect both parties, real estate contingencies are added",
    image: "https://dwelio.org/wp-content/uploads/2025/09/Real-Estate-Contingencies.jpg"
  },
  {
    title: "15 Home Buying Myths to Unlearn Right Now",
    description: "Buying a home is exciting, but it's also full of misconceptions. Many first-time and repeat buyers fall for outdated advice that can lead to poor",
    image: "https://dwelio.org/wp-content/uploads/2025/09/Home-Buying-Myths-to-Unlearn.jpg"
  },
  {
    title: "For Sale by Owner vs Real Estate Agent",
    description: "When it's time to sell your home, one of the first decisions you'll face is whether to handle the sale yourself (For Sale by Owner,",
    image: "https://dwelio.org/wp-content/uploads/2025/09/For-Sale-by-Owner-vs-Real-Estate-Agent.jpg"
  },
  {
    title: "Is It Cheaper to Buy or Build a House?",
    description: "When it's time to find your dream home, one of the biggest questions you'll face is: Should you buy or build a house? This decision",
    image: "https://dwelio.org/wp-content/uploads/2025/09/Buy-or-Build-a-House.webp"
  },
  {
    title: "20 Different Types of Homes",
    description: "When starting your home search, understanding the different types of homes helps you narrow down options that match your needs. From apartments to architectural styles,",
    image: "https://dwelio.org/wp-content/uploads/2025/08/20-Different-Types-of-Homes.jpg"
  },
  {
    title: "How to Win a House Bidding War",
    description: "In today's competitive real estate market, multiple buyers often compete for the same property, creating a house bidding war. If you're serious about winning your",
    image: "https://dwelio.org/wp-content/uploads/2025/08/House-Bidding-War.webp"
  },
  {
    title: "Average Time to Sell a House",
    description: "When you decide to put your home on the market, one of the first questions you'll ask is, \"What's the average time to sell a",
    image: "https://dwelio.org/wp-content/uploads/2025/08/Average-Time-to-Sell-a-House.jpeg"
  },
  {
    title: "Should I Sell My House Now or Wait Until 2026?",
    description: "Selling a home is one of the biggest financial decisions most people make in their lifetime. If you have been asking yourself, \"Should I sell",
    image: "https://dwelio.org/wp-content/uploads/2025/08/Should-I-Sell-My-House.jpg"
  },
  {
    title: "How to Market Your Home for Sale",
    description: "Selling your home quickly and at the best price depends on how well you market it. This guide will show you simple and proven steps",
    image: "https://dwelio.org/wp-content/uploads/2025/08/How-to-Market-Your-Home-for-Sale.webp"
  },
  {
    title: "Best Paint Colors to Sell a House for More Money",
    description: "When selling your home, small changes can make a big difference and painting is one of the easiest, most cost-effective upgrades you can do. The",
    image: "https://dwelio.org/wp-content/uploads/2025/08/Best-Paint-Colors-to-Sell-a-House.jpg"
  },
  {
    title: "Best Tips for Showing Your House",
    description: "When you're selling your home, first impressions matter. A well-presented house can help buyers picture themselves living there, which increases your chances of getting strong",
    image: "https://dwelio.org/wp-content/uploads/2025/08/Tips-for-Showing-Your-House.webp"
  },
  {
    title: "Best Home Improvements to Increase Value",
    description: "When it comes to selling your home or simply boosting its worth, the right upgrades can make all the difference. The best home improvements not",
    image: "https://dwelio.org/wp-content/uploads/2025/08/Best-Home-Improvements-scaled.jpg"
  },
  {
    title: "Exterior Home Upgrades That Pay Off When You Sell",
    description: "When it comes to increasing your home's value and attracting buyers, curb appeal matters. In fact, first impressions often start from the street. That's why",
    image: "https://dwelio.org/wp-content/uploads/2025/07/Exterior-Home-Upgrades-That-Pay-Off-When-You-Sell.jpg"
  },
  {
    title: "Should You Remodel or Move?",
    description: "At some point, most homeowners face a major decision: Should you remodel or move? Whether your family is growing, your style has changed, or your",
    image: "https://dwelio.org/wp-content/uploads/2025/07/Remodel-or-Move.webp"
  },
  {
    title: "Where Are the Least Competitive Housing Markets?",
    description: "In the fast-moving world of real estate, not every market is a bidding war. Some areas offer more breathing room for buyers, with fewer multiple",
    image: "https://dwelio.org/wp-content/uploads/2025/07/Least-Competitive-Housing-Markets.png"
  },
  {
    title: "How to Write a Memorable Real Estate Agent Bio That Builds Trust",
    description: "Your real estate agent bio is often the first impression clients get of you. In a competitive market, having a well-written and memorable real estate",
    image: "https://dwelio.org/wp-content/uploads/2025/07/Real-Estate-Agent-Bio.jpg"
  },
  {
    title: "Social Media Trends for Real Estate Marketing",
    description: "Social media is no longer optional for real estate professionals, it's essential. With platforms like Instagram, Facebook, and TikTok shaping how people discover homes, staying",
    image: "https://dwelio.org/wp-content/uploads/2025/07/Social-Media-Trends-for-Real-Estate-Marketing.webp"
  },
  {
    title: "10 Smart Ways to Automate your Real Estate Social Media",
    description: "Managing social media as a real estate professional can be overwhelming especially when juggling client meetings, listings, and closings. Luckily, automation can take the pressure",
    image: "https://dwelio.org/wp-content/uploads/2025/07/Ways-to-Automate-your-Real-Estate-Social-Media.jpg"
  },
  {
    title: "Understanding the New Construction Buying Process",
    description: "Buying a newly built home is exciting—but the process is very different from purchasing a resale home. Whether you're a real estate agent helping a",
    image: "https://dwelio.org/wp-content/uploads/2025/07/New-Construction-Buying-Process.jpg"
  },
  {
    title: "10 Ways to Use ChatGPT for Your Real Estate Business",
    description: "As a real estate professional, you wear many hats—from marketing to client communications to lead generation. But what if you could save hours each week",
    image: "https://dwelio.org/wp-content/placeholder.webp"
  },
  {
    title: "Fresh Social Media Ideas for Real Estate Agents",
    description: "In today's digital-first market, a strong social media presence is no longer optional—it's essential for real estate success. Whether you're helping first-time buyers or seasoned",
    image: "https://dwelio.org/wp-content/uploads/2025/07/Social-Media-Ideas-for-Real-Estate.png"
  },
  {
    title: "TikTok or Instagram: What's right for your real estate brand?",
    description: "Wondering whether TikTok or Instagram will help grow your real estate brand faster? You're not alone. Thousands of real estate agents use social media daily—but",
    image: "https://dwelio.org/wp-content/uploads/2025/07/TikTok-or-Instagram.png"
  },
  {
    title: "20 Scroll-Stopping Instagram Ideas for Real Estate Pros",
    description: "In the world of real estate, Instagram is no longer just an option—it's a lead-generating powerhouse. With over 2 billion users, the platform allows agents",
    image: "https://dwelio.org/wp-content/uploads/2025/07/Instagram-Ideas-for-Real-Estate.jpg"
  },
  {
    title: "Email Marketing Strategy Templates to Drive Real Estate Leads & Sales",
    description: "Email remains one of the most effective marketing channels in real estate, even in 2025. It allows agents to build relationships, share listings, and stay",
    image: "https://dwelio.org/wp-content/uploads/2025/07/Email-Marketing-Strategy-Templates.webp"
  },
  {
    title: "Lead Success in Real Estate From Outreach to Closing",
    description: "In the competitive world of real estate, turning prospects into successful closings isn't just about luck—it's about having a structured, smart, and seamless approach. Whether",
    image: "https://dwelio.org/wp-content/uploads/2025/07/Leads-Success-in-Real-Estate.webp"
  },
  {
    title: "Real Estate Lead Generation Ideas for Agents",
    description: "Struggling to find quality leads in today's competitive property market? You're not alone. Whether you're new to real estate or a seasoned agent, generating consistent,",
    image: "https://dwelio.org/wp-content/uploads/2025/07/Real-Estate-Lead-Generation-Ideas-for-Agents.webp"
  },
  {
    title: "Top Real Estate Lead Generation Tips 2025",
    description: "In 2025, the real estate market continues to evolve—and so should your approach to lead generation. With buyers and sellers expecting faster communication, personalized experiences,",
    image: "https://dwelio.org/wp-content/uploads/2025/07/Top-Real-Estate-Lead-Generation-Tips.jpg"
  },
  {
    title: "Proven Real Estate Lead Generation Strategies That Work",
    description: "Generating quality leads is the backbone of every successful real estate business. With a competitive market and growing buyer expectations, agents must use strategies that",
    image: "https://dwelio.org/wp-content/uploads/2025/07/Real-Estate-Lead-Generation-Strategies.webp"
  },
  {
    title: "10 Real Estate Content ideas for Summer",
    description: "As summer heats up, so does the real estate market. With longer days, better weather, and motivated buyers, this is the ideal time to market",
    image: "https://dwelio.org/wp-content/uploads/2025/06/10-Real-Estate-Content-ideas-for-Summer.jpg"
  },
  {
    title: "Do you have a real estate conversion pipeline?",
    description: "In today's competitive real estate market, it's not enough to just generate leads—you need a system to convert them. This is where the concept of",
    image: "https://dwelio.org/wp-content/uploads/2025/06/Do-you-have-a-real-estate-conversion-pipeline.webp"
  },
  {
    title: "10 Top Real Estate Branding Mistakes",
    description: "Your real estate brand is more than just a logo—it's your reputation, your voice, and your promise to clients. In a competitive industry, standing out",
    image: "https://dwelio.org/wp-content/uploads/2025/06/Top-Real-Estate-Branding-Mistakes.jpg"
  },
  {
    title: "How Top Real Estate Agents Earn Loyalty?",
    description: "In today's competitive housing market, closing a deal is no longer enough to stand out. The real measure of success? Earning a client's loyalty. How",
    image: "https://dwelio.org/wp-content/uploads/2025/06/How-Top-Real-Estate-Agents-Earn-Loyalty.webp"
  },
  {
    title: "Overcoming objections in Real Estate",
    description: "In the world of real estate, objections are part of every agent's daily routine. Whether you're working with a hesitant buyer or a skeptical seller,",
    image: "https://dwelio.org/wp-content/uploads/2025/06/Overcoming-objections-in-Real-Estate.jpg"
  },
  {
    title: "5 Things that Impact the Price of a Home",
    description: "When it comes to buying or selling property, understanding what affects home prices is essential. Whether you're a buyer, seller, or real estate investor, being",
    image: "https://dwelio.org/wp-content/uploads/2025/06/5-Things-that-Impact-the-Price-of-a-Home.jpg"
  },
  {
    title: "Should You Rent or Buy a Home?",
    description: "When you're trying to decide whether to rent or buy a home, the answer isn't always clear-cut. It's a big financial decision that depends on",
    image: "https://dwelio.org/wp-content/uploads/2025/06/Rent-or-Buy-a-Home.jpg"
  },
  {
    title: "The Real Estate Commission: How Much Are Agent Fees",
    description: "When buying or selling a home, one of the most commonly asked questions is: \"How much do real estate agents charge?\"Understanding the real estate",
    image: "https://dwelio.org/wp-content/uploads/2025/06/Real-Estate-Commission.jpg"
  },
  {
    title: "Do You Need a Real Estate Agent for New Construction?",
    description: "Buying a new construction home can feel exciting—and a little overwhelming. Many buyers assume they don't need a real estate agent when dealing directly with",
    image: "https://dwelio.org/wp-content/uploads/2025/05/Real-Estate-Agent-for-New-Construction.jpg"
  },
  {
    title: "10 Real Estate Communication Mistakes to Avoid",
    description: "Effective communication is the backbone of real estate success. Whether you're a new agent or a seasoned professional, knowing how to communicate clearly with buyers,",
    image: "https://dwelio.org/wp-content/uploads/2025/05/10-Real-Estate-Communication-Mistakes-to-Avoid.jpg"
  },
  {
    title: "How to Create a Facebook Community for Real Estate?",
    description: "Building a Facebook Community for Real Estate is one of the most effective ways to connect with potential buyers, sellers, and fellow agents. In today's",
    image: "https://dwelio.org/wp-content/uploads/2025/05/Facebook-Community-for-Real-Estate.png"
  },
  {
    title: "10 Real Estate Video Marketing Ideas To Grow Your Leads",
    description: "Looking to attract more home buyers and sellers? These real estate video marketing ideas can help you build trust, boost engagement, and grow your leads.",
    image: "https://dwelio.org/wp-content/uploads/2025/05/Real-Estate-Video-Marketing-Ideas.webp"
  },
  {
    title: "How to handle ghosting in real estate?",
    description: "Ghosting in real estate happens when a client suddenly stops responding—no calls, no emails, and no explanations. As an agent, you may have spent time",
    image: "https://dwelio.org/wp-content/uploads/2025/05/How-to-handle-ghosting-in-real-estate.jpg"
  },
  {
    title: "Data that closes real estate deals",
    description: "In today's fast-moving real estate market, experience and intuition are no longer enough. Buyers and sellers are more informed than ever, and expectations are rising.",
    image: "https://dwelio.org/wp-content/uploads/2025/05/Data-that-closes-real-estate-deals.webp"
  },
  {
    title: "25 summer social media ideas for real estate agents",
    description: "Social media is a powerful way to grow your real estate business—especially during the busy summer season. The right content can boost engagement, attract new",
    image: "https://dwelio.org/wp-content/uploads/2025/05/25-summer-social-media-ideas-for-real-estate-agents.jpg"
  },
  {
    title: "9 Email Marketing Metrics Every Real Estate Agent Should Track",
    description: "Email marketing remains one of the most powerful tools in a real estate agent's toolkit. But sending emails isn't enough—you need to measure how they",
    image: "https://dwelio.org/wp-content/uploads/2025/05/9-Email-Marketing-Metrics-Every-Real-Estate-Agent-Should-Track.jpeg"
  },
  {
    title: "Build Trust and Win More Clients With Dwelio",
    description: "In today's competitive real estate market, standing out means more than just listing properties. You need to Build Trust and Win More Clients to succeed",
    image: "https://dwelio.org/wp-content/uploads/2025/05/Build-Trust-and-Win-More-Clients-With-Dwelio.png"
  },
  {
    title: "How to Optimize Your Landing Page for More Leads",
    description: "If your landing page isn't turning visitors into leads, it's time to fix it. Learning how to optimize your landing page for more leads can",
    image: "https://dwelio.org/wp-content/uploads/2025/05/How-to-Optimize-Your-Landing-Page-for-More-Leads.jpg"
  },
  {
    title: "Top 10 Real Estate Marketing Tools for 2025",
    description: "The real estate industry moves fast, and staying competitive in 2025 means using the right marketing tools. From attracting new leads to closing deals quickly,",
    image: "https://dwelio.org/wp-content/uploads/2025/05/Top-10-Real-Estate-Marketing-Tools-for-2025.jpg"
  },
  {
    title: "6 Reasons you should never Buy or Sell a Home without an Agent",
    description: "Buying or selling a home is one of the most significant financial decisions most people will ever make. With so much at stake, many ask",
    image: "https://dwelio.org/wp-content/uploads/2025/05/6-reasons-you-should-never-buy-or-sell-a-home-without-an-agent.jpg"
  },
  {
    title: "5 Simple Ways to Invest in Real Estate",
    description: "Thinking of building wealth through real estate? You don't need to be a millionaire or an expert to get started. In fact, real estate investing",
    image: "https://dwelio.org/wp-content/uploads/2025/05/5-Simple-Ways-to-Invest-in-Real-Estate.jpg"
  },
  {
    title: "Local SEO Tips for Real Estate",
    description: "In the real estate world, location is everything—and that applies to your marketing too. Local SEO (Search Engine Optimization) helps your website and content appear",
    image: "https://dwelio.org/wp-content/uploads/2025/04/Local-SEO-Tips-for-Real-Estate.png"
  },
  {
    title: "10 Best Ways To Get Clients in Real Estate",
    description: "Whether you're a new agent or an experienced broker, getting consistent clients in real estate is the lifeblood of your business. With the market evolving",
    image: "https://dwelio.org/wp-content/uploads/2025/04/10-Best-Ways-To-Get-Clients-in-Real-Estate.jpg"
  },
  {
    title: "5 AI-Powered Ways to Generate Real Estate Leads in 2025",
    description: "The real estate industry has always relied heavily on personal connections, local insights, and market timing. But in 2025, Artificial Intelligence (AI) has completely transformed",
    image: "https://dwelio.org/wp-content/uploads/2025/04/AI-Powered-Ways-to-Generate-Real-Estate-Leads.png"
  },
  {
    title: "Will Rates Drop Below 6%? 2025 Mortgage Forecasts",
    description: "As we move through 2025, one question is on every homebuyer's mind: Will mortgage rates drop below 6%? After reaching historic highs in recent years,",
    image: "https://dwelio.org/wp-content/uploads/2025/04/Will-Rates-Drop-Below-6.jpeg"
  },
  {
    title: "Talking to Buyers About Property Tax Deductions",
    description: "When homebuyers think about the cost of purchasing a property, they often focus on the sale price, down payment, and mortgage. But there's another important",
    image: "https://dwelio.org/wp-content/uploads/2025/04/Property-Tax-Deductions.jpg"
  },
  {
    title: "ARM vs Fixed-Rate Mortgage: What's the Difference",
    description: "Choosing the right mortgage is one of the biggest financial decisions when buying a home. Two of the most common options are the adjustable-rate mortgage",
    image: "https://dwelio.org/wp-content/uploads/2025/04/ARM-vs-Fixed-Rate-Mortgage.webp"
  },
  {
    title: "SEO for Real Estate: How to Rank #1 for Local Property Searches",
    description: "In today's digital-first world, most homebuyers start their journey online—searching for properties, agents, and answers on Google. If you're not showing up on the first",
    image: "https://dwelio.org/wp-content/uploads/2025/04/SEO-for-Real-Estate.png"
  },
  {
    title: "Tips for Selling Your Home During the Holidays",
    description: "Many homeowners wonder if selling your home during the holidays is a smart move. While it might seem like a challenging time with busy schedules,",
    image: "https://dwelio.org/wp-content/uploads/2025/04/Tips-for-Selling-Your-Home-During-the-Holidays.jpg"
  },
  {
    title: "Property Taxes Explained: What Every Buyer Should Know",
    description: "When buying a home, many first-time buyers focus on the price, mortgage, and down payment—often overlooking one important ongoing cost: property taxes. These taxes can",
    image: "https://dwelio.org/wp-content/uploads/2025/04/Property-Taxes.jpg"
  },
  {
    title: "Top Strategies to Grow Your Real Estate Brand",
    description: "In the highly competitive real estate industry, your personal or agency brand is one of your biggest assets. A strong brand builds trust, attracts clients,",
    image: "https://dwelio.org/wp-content/uploads/2025/04/Top-Strategies-to-Grow-Your-Real-Estate-Brand.webp"
  },
  {
    title: "Converting Online Real Estate Leads: What to Expect",
    description: "In today's digital world, generating online real estate leads is easier than ever—but converting them is where the real challenge begins. Many agents assume that",
    image: "https://dwelio.org/wp-content/uploads/2025/04/Converting-Online-Real-Estate-Leads.jpg"
  },
  {
    title: "Real Estate Marketing Trends You Need to Know",
    description: "The real estate market is evolving rapidly, especially in how professionals reach, engage, and convert buyers and sellers. Whether you're a real estate agent, broker,",
    image: "https://dwelio.org/wp-content/uploads/2025/04/Real-Estate-Marketing-Trends.png"
  },
  {
    title: "The Complete Process of Buying a Home with a Real Estate Agent",
    description: "Buying a home is one of the most important financial decisions you'll ever make. Whether you're a first-time buyer or upgrading to a new home,",
    image: "https://dwelio.org/wp-content/uploads/2025/04/Buying-a-Home-with-a-Real-Estate-Agent.webp"
  },
  {
    title: "Do You Really Need a Real Estate Agent?",
    description: "Buying or selling a home is a major financial decision. Many people ask themselves, \"Do I really need a real estate agent?\" While some individuals",
    image: "https://dwelio.org/wp-content/uploads/2025/04/Do-You-Really-Need-a-Real-Estate-Agent.webp"
  },
  {
    title: "What Is a Short Sale?",
    description: "A short sale is a real estate transaction where a homeowner sells their property for less than the amount they owe on the mortgage. This",
    image: "https://dwelio.org/wp-content/uploads/2025/04/What-Is-a-Short-Sale.jpg"
  },
  {
    title: "Buying a Home as an Unmarried Couple? Do These Things",
    description: "Buying a home as an unmarried couple is becoming more common in today's housing market. Many couples choose to live together and build a life",
    image: "https://dwelio.org/wp-content/uploads/2025/04/Buying-a-Home-as-an-Unmarried-Couple.webp"
  },
  {
    title: "Is it possible to invest in real estate with a small budget?",
    description: "Yes, you can invest in real estate even with a small budget. Many people believe that real estate is only for the wealthy, but that's",
    image: "https://dwelio.org/wp-content/uploads/2025/04/Is-it-possible-to-invest-in-real-estate-with-a-small-budget.webp"
  },
  {
    title: "10 Steps to Buying a House",
    description: "Buying a house is one of the biggest financial decisions you'll ever make. Whether you're a first-time buyer or returning to the market, the process",
    image: "https://dwelio.org/wp-content/uploads/2025/04/10-Steps-to-Buying-a-House.jpg"
  },
  {
    title: "How to Get the Seller to Pay for Closing Costs?",
    description: "When buying a home, closing costs can be a significant expense. They include fees like inspection charges, title insurance, and loan-related costs. As a buyer,",
    image: "https://dwelio.org/wp-content/uploads/2025/04/Seller-to-Pay-for-Closing-Costs.jpg"
  },
  {
    title: "The 10 Hottest Housing Markets for 2025",
    description: "The real estate market in the U.S. is constantly changing, and buyers and investors are always looking for the next big opportunity. Some cities are",
    image: "https://dwelio.org/wp-content/uploads/2025/03/Housing-Markets.jpg"
  },
  {
    title: "Can a Seller Back Out of a Contract?",
    description: "Selling a home is a significant decision, and once a contract is signed, it becomes a legally binding agreement. However, circumstances may change, leading a",
    image: "https://dwelio.org/wp-content/uploads/2025/03/Can-a-Seller-Back-Out-of-a-Contract.webp"
  },
  {
    title: "The Best Months to Sell Your House",
    description: "Timing is important when selling a house. The right month can help you sell faster and get a better price. But when is the best",
    image: "https://dwelio.org/wp-content/uploads/2025/03/Best-Months-to-Sell-Your-House.jpg"
  },
  {
    title: "7 Reasons Why You Should Consider Selling in the Winter",
    description: "Many homeowners believe that spring and summer are the best seasons to sell a house. While warmer months do attract buyers, selling in winter offers",
    image: "https://dwelio.org/wp-content/uploads/2025/03/Reasons-Why-You-Should-Consider-Selling-in-the-Winter.webp"
  },
  {
    title: "10 Investigative Questions to Ask a Home Seller",
    description: "Buying a home is a significant investment, and asking the right questions can help you make an informed decision. Many buyers focus on price and",
    image: "https://dwelio.org/wp-content/uploads/2025/03/10-Investigative-Questions-to-Ask-a-Home-Seller.jpg"
  },
  {
    title: "Tips for Investing in Real Estate",
    description: "Real estate investing is one of the most reliable ways to build wealth. Whether you want passive income, long-term appreciation, or quick profits from flipping",
    image: "https://dwelio.org/wp-content/uploads/2025/03/Tips-for-Investing-in-Real-Estate.jpg"
  },
  {
    title: "Top Marketing Strategies for Real Estate Agents",
    description: "In today's competitive market, real estate agents need effective marketing strategies to attract clients, generate leads, and close deals successfully. Relying solely on referrals or",
    image: "https://dwelio.org/wp-content/uploads/2025/03/Marketing-Strategies-for-Real-Estate-Agents.webp"
  },
  {
    title: "Home Staging Tips to Attract More Buyers",
    description: "When selling a home, first impressions matter. Buyers make quick decisions based on a property's appearance, and a well-staged home can significantly increase interest and",
    image: "https://dwelio.org/wp-content/uploads/2025/03/Home-Staging-tips.jpg"
  }
];

defineExpose({
  target6
})
</script>

<style scoped>
.featured-insights {
  min-height: 66vh !important;
  position: relative;
}

.insights-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.insights-header {
  margin-bottom: 4rem;
}

.insights-subtitle {
  font-size: clamp(0.95rem, 1.1vw, 1.2rem);
  color: #b0b0b0;
  line-height: 1.6;
  margin: 0 auto;
}

.insights-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
  line-height: 1.2;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.75rem;
}

.title-arrow {
  flex: 0 0 35px;
  width: 35px;
  height: 35px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #000;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(6px);
  line-height: 1;
  z-index: 2;
  padding: 1.5rem;
  transition: transform 0.2s ease, background 0.2s ease;
}

.insight-card {
  border-radius: 20px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(40px);
}

.insight-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.card-image-container {
  padding: 2rem 2rem 0 2rem;
}

.card-image-container img,
.card-image-container .q-img__image {
  display: block;
  width: 100%;
  height: 240px;
  object-fit: cover;
  object-position: center;
  margin: 0 auto;
}

.insight-image {
  transition: transform 0.3s ease;
}

.insight-card:hover .card-arrow i {
  transform: translate(2px, -2px);
}

.card-content {
  padding: 2rem;
}

.insight-description {
  font-size: clamp(0.8rem, 2vw, 0.9rem);
  margin: 0;
  font-weight: 400;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.7);
}

.insight-title {
  font-size: clamp(1rem, 1.4vw, 0.8rem);
  font-weight: 700;
  color: #fff;
  margin-bottom: 1rem;
  line-height: 1.3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}

.insight-title-text {
  flex: 1 1 auto;
  min-width: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@media (max-width: 768px) {
  .featured-insights {
    padding: 4rem 0;
  }

  .insights-header {
    margin-bottom: 3rem;
  }

  .card-content {
    padding: 1.5rem;
  }
}

</style>
