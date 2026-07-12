import React from 'react';
import BlogPost from '@/components/Blog/BlogPost';
import { notFound } from 'next/navigation';

// Generate static params for all blog posts
export async function generateStaticParams() {
  const blogSlugs = [
    'electric-scooter-savings-2026',
    'ev-battery-maintenance-guide', 
    'ev-vs-petrol-performance-comparison'
  ];

  return blogSlugs.map((slug) => ({
    slug: slug,
  }));
}

// This would typically come from a CMS or markdown files
const getBlogPost = async (slug) => {
  const blogPosts = {
    'electric-scooter-savings-2026': {
      title: "How Much Money Can You Actually Save by Switching to an Electric Scooter in 2026?",
      content: `
        <p><em>Published: January 15, 2026 | By Abhilashit Automobiles</em></p>

        <p>Rising fuel prices got you thinking twice about your daily commute? You're not alone. Petrol costs in India have jumped 15% in the last year, making that daily trip to work increasingly expensive.</p>

        <p>The good news? <strong>Electric scooters can save you ₹50,000+ annually</strong> compared to traditional petrol bikes. But how do these savings break down, and which models give you the best bang for your buck?</p>

        <h2>The Real Numbers: Petrol vs Electric Costs</h2>

        <h3>Daily Fuel Expenses</h3>
        <p>Your current petrol scooter probably guzzles about 40-50 km per liter. With petrol at ₹105 per liter in most Indian cities, here's what you're spending:</p>

        <ul>
          <li><strong>Daily commute (30 km):</strong> ₹65-80</li>
          <li><strong>Monthly fuel cost:</strong> ₹2,000-2,400</li>
          <li><strong>Annual fuel expense:</strong> ₹24,000-28,800</li>
        </ul>

        <p>Compare that to charging an <strong>electric scooter battery range</strong> of 80-120 km:</p>

        <ul>
          <li><strong>Daily electricity cost (30 km):</strong> ₹8-12</li>
          <li><strong>Monthly charging cost:</strong> ₹240-360</li>
          <li><strong>Annual electricity expense:</strong> ₹2,880-4,320</li>
        </ul>

        <p><strong>Annual savings on fuel alone: ₹21,000-24,500</strong></p>

        <h3>Maintenance: Where Electric Really Shines</h3>

        <p>Petrol scooters need constant attention. Oil changes every 3,000 km, air filter replacements, spark plug maintenance – it adds up fast.</p>

        <p><strong>Annual petrol scooter maintenance:</strong></p>
        <ul>
          <li>Engine oil changes: ₹3,200</li>
          <li>Air filter replacement: ₹800</li>
          <li>Spark plugs: ₹600</li>
          <li>Chain maintenance: ₹1,500</li>
          <li>General servicing: ₹4,200</li>
          <li><strong>Total: ₹10,300</strong></li>
        </ul>

        <p><strong>Electric scooter maintenance:</strong></p>
        <ul>
          <li>Brake pad checks: ₹800</li>
          <li>Tire maintenance: ₹1,200</li>
          <li>Battery health checks: ₹600</li>
          <li><strong>Total: ₹2,600</strong></li>
        </ul>

        <p><strong>Annual maintenance savings: ₹7,700</strong></p>

        <h2>Premium Electric Mobility Models: Cost Breakdown</h2>

        <p>Let's look at real savings with popular models in the <strong>affordable EV scooter</strong> category:</p>

        <h3>Budget-Friendly Options (₹80,000-₹1,00,000)</h3>
        <ul>
          <li><strong>Royal Model</strong> (80 km range): Perfect for city commutes</li>
          <li>Initial cost difference vs petrol: +₹25,000</li>
          <li>Break-even period: 10 months</li>
          <li>5-year savings: ₹1,15,000</li>
        </ul>

        <h3>Mid-Range Performance (₹1,00,000-₹1,30,000)</h3>
        <ul>
          <li><strong>Royal Prime</strong> (120 km range): Ideal for longer trips</li>
          <li>Initial cost difference vs petrol: +₹35,000</li>
          <li>Break-even period: 14 months</li>
          <li>5-year savings: ₹1,05,000</li>
        </ul>

        <h3>Premium Category (₹1,30,000+)</h3>
        <ul>
          <li><strong>Legend DLX</strong> (150+ km range): <strong>Best electric scooter in Bihar</strong> for performance</li>
          <li>Initial cost difference vs petrol: +₹45,000</li>
          <li>Break-even period: 18 months</li>
          <li>5-year savings: ₹95,000</li>
        </ul>

        <h2>Hidden Savings You Haven't Considered</h2>

        <h3>Insurance Costs</h3>
        <p><strong>Electric two-wheeler price</strong> includes lower insurance premiums. EVs get 15% discounts on comprehensive coverage, saving you ₹2,000-3,000 annually.</p>

        <h3>Government Incentives</h3>
        <ul>
          <li>Central subsidy: Up to ₹15,000</li>
          <li>State subsidies (Bihar): Additional ₹10,000-25,000</li>
          <li>Road tax exemption: ₹3,000-8,000 savings</li>
        </ul>

        <h3>Resale Value Protection</h3>
        <p>Quality electric scooters hold their value better. After 5 years, expect 45-50% resale value vs 30-35% for petrol models.</p>

        <h2>Charging Time vs Refueling: The Convenience Factor</h2>

        <p>Modern <strong>EV scooter charging time</strong> has improved dramatically:</p>

        <ul>
          <li><strong>Fast charging:</strong> 0-80% in 2.5 hours</li>
          <li><strong>Home charging:</strong> Full charge overnight (6-8 hours)</li>
          <li><strong>Swappable batteries:</strong> Instant swap in 30 seconds (select models)</li>
        </ul>

        <p>No more queue at petrol pumps. Charge at home, office, or growing network of public stations.</p>

        <h2>Real Customer Experience: What Owners Say</h2>

        <blockquote>
          <p>"I was spending ₹2,500 monthly on petrol. Now my electricity bill increased by just ₹300. The Royal Prime paid for itself in 11 months."</p>
          <cite>— Rajesh Kumar, Patna resident, 18 months of ownership</cite>
        </blockquote>

        <blockquote>
          <p>"<strong>High-performance electric bike</strong> doesn't mean compromise. My Legend DLX accelerates faster than my old Activa, and I haven't visited a service center in 8 months."</p>
          <cite>— Priya Sharma, Muzaffarpur, 2 years of ownership</cite>
        </blockquote>

        <h2>The 5-Year Financial Picture</h2>

        <p>Here's what switching saves you over 5 years:</p>

        <table>
          <thead>
            <tr>
              <th>Expense Category</th>
              <th>Petrol Scooter</th>
              <th>Electric Scooter</th>
              <th>Savings</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Fuel/Electricity</td>
              <td>₹1,44,000</td>
              <td>₹21,600</td>
              <td>₹1,22,400</td>
            </tr>
            <tr>
              <td>Maintenance</td>
              <td>₹51,500</td>
              <td>₹13,000</td>
              <td>₹38,500</td>
            </tr>
            <tr>
              <td>Insurance</td>
              <td>₹25,000</td>
              <td>₹21,000</td>
              <td>₹4,000</td>
            </tr>
            <tr>
              <td><strong>Total Savings</strong></td>
              <td></td>
              <td></td>
              <td><strong>₹1,64,900</strong></td>
            </tr>
          </tbody>
        </table>

        <p>Even accounting for battery replacement (₹25,000-35,000 after 4-5 years), you're still ahead by ₹1,30,000+.</p>

        <h2>Making the Switch: What to Consider</h2>

        <h3>Choose Based on Your Commute</h3>
        <ul>
          <li><strong>Under 40 km daily:</strong> Entry-level models work perfectly</li>
          <li><strong>40-70 km daily:</strong> Mid-range with 100+ km range</li>
          <li><strong>70+ km daily:</strong> Premium models with fast-charging</li>
        </ul>

        <h3><strong>Eco-friendly Daily Commute</strong> Benefits</h3>
        <p>Beyond savings, you're cutting CO2 emissions by 1,200 kg annually. That's equivalent to planting 15 trees every year.</p>

        <h2>Ready to Start Saving?</h2>

        <p>The math is clear: electric scooters deliver substantial savings from month one. With improving <strong>electric scooter battery range</strong> and expanding charging infrastructure, 2026 is the perfect time to make the switch.</p>

        <p>Want to see these savings in action? Visit any <strong>Abhilashit Automobiles</strong> showroom for a test ride. Our team will calculate exact savings based on your specific commute and usage pattern.</p>

        <p><strong>Book your test ride today</strong> and join thousands of smart commuters already saving money while helping the environment.</p>
      `,
      publishedDate: "January 15, 2026",
      author: "Abhilashit Automobiles"
    },
    'ev-battery-maintenance-guide': {
      title: "Complete EV Battery Care Guide: Make Your Electric Scooter Battery Last 5+ Years",
      content: `
        <p><em>Published: January 20, 2026 | By Abhilashit Automobiles</em></p>

        <p>Your electric scooter's battery is its heart. Take care of it properly, and it'll serve you reliably for years. Neglect it, and you'll face expensive replacements much sooner than expected.</p>

        <p>Most EV owners don't realize simple daily habits can double their battery lifespan. Here's everything you need to know about <strong>electric scooter battery range</strong> optimization and longevity.</p>

        <h2>Understanding Your EV Battery</h2>

        <h3>Lithium-Ion Basics</h3>
        <p>Modern electric scooters use lithium-ion batteries, the same technology in your smartphone. They're powerful, lightweight, but need specific care.</p>

        <p><strong>Key specs to know:</strong></p>
        <ul>
          <li><strong>Cycle life:</strong> 800-1,200 full charge cycles</li>
          <li><strong>Optimal temperature:</strong> 15°C to 25°C</li>
          <li><strong>Charging voltage:</strong> 48V to 72V (model dependent)</li>
          <li><strong>Expected lifespan:</strong> 3-5 years with proper care</li>
        </ul>

        <h3>Battery Chemistry Matters</h3>
        <p><strong>Premium electric mobility</strong> models like our Royal Prime use high-grade lithium phosphate cells. These last longer but cost more than basic lithium-ion.</p>

        <h2>Daily Habits That Extend Battery Life</h2>

        <h3>Charging Best Practices</h3>

        <p><strong>The 20-80 Rule</strong><br>
        Never let your battery drop below 20% or charge beyond 80% for daily use. This single habit can extend battery life by 40%.</p>

        <ul>
          <li><strong>Daily charging range:</strong> 20% to 80%</li>
          <li><strong>Weekly full charge:</strong> Once per week, charge to 100%</li>
          <li><strong>Monthly deep cycle:</strong> Let it drop to 10%, then full charge</li>
        </ul>

        <h3><strong>EV Scooter Charging Time</strong> Optimization</h3>

        <p><strong>Slow charging beats fast charging</strong> for battery health:</p>

        <ul>
          <li><strong>Home charging (6-8 hours):</strong> Best for battery longevity</li>
          <li><strong>Fast charging (2-3 hours):</strong> Use only when necessary</li>
          <li><strong>Ultra-fast charging:</strong> Avoid unless emergency</li>
        </ul>

        <h3>Temperature Management</h3>

        <p><strong>Hot weather tips:</strong></p>
        <ul>
          <li>Park in shade whenever possible</li>
          <li>Don't charge immediately after riding in heat</li>
          <li>Let battery cool for 30 minutes before charging</li>
        </ul>

        <p><strong>Cold weather care:</strong></p>
        <ul>
          <li>Store indoors during winter</li>
          <li>Warm up battery gradually before riding</li>
          <li>Charge indoors, not in cold garages</li>
        </ul>

        <h2>Monthly Maintenance Checklist</h2>

        <h3>Battery Health Monitoring</h3>
        <p>Check these monthly:</p>

        <p><strong>Visual inspection:</strong></p>
        <ul>
          <li>No cracks or swelling in battery case</li>
          <li>Clean terminals (no corrosion)</li>
          <li>Secure mounting (no loose bolts)</li>
        </ul>

        <p><strong>Performance tracking:</strong></p>
        <ul>
          <li>Note actual range vs rated range</li>
          <li>Monitor <strong>electric scooter charging time</strong> changes</li>
          <li>Watch for unusual heat during charging</li>
        </ul>

        <h3>Cleaning Protocol</h3>
        <ul>
          <li><strong>Terminals:</strong> Clean with dry cloth monthly</li>
          <li><strong>Vents:</strong> Ensure air vents aren't blocked</li>
          <li><strong>Housing:</strong> Wipe exterior, avoid water on connections</li>
        </ul>

        <h2>Troubleshooting Common Issues</h2>

        <h3>Range Dropping Faster Than Expected</h3>

        <p><strong>Possible causes:</strong></p>
        <ul>
          <li>Tire pressure low (check monthly)</li>
          <li>Aggressive acceleration habits</li>
          <li>Battery aging (normal after 2-3 years)</li>
          <li>Cold weather impact</li>
        </ul>

        <p><strong>Solutions:</strong></p>
        <ul>
          <li>Maintain proper tire pressure (35-40 PSI)</li>
          <li>Use eco mode for daily commuting</li>
          <li>Plan for 20% range reduction in winter</li>
        </ul>

        <h3>Charging Problems</h3>

        <p><strong>Slow charging speed:</strong></p>
        <ul>
          <li>Check charger connections</li>
          <li>Clean charging port</li>
          <li>Verify charger specifications</li>
        </ul>

        <p><strong>Battery not holding charge:</strong></p>
        <ul>
          <li>Perform monthly calibration cycle</li>
          <li>Check for apps draining power</li>
          <li>Consider professional battery health check</li>
        </ul>

        <h2>When to Replace Your Battery</h2>

        <h3>Warning Signs</h3>
        <p>Replace battery if you notice:</p>

        <ul>
          <li>Range drops below 60% of original</li>
          <li><strong>Charging time increases by 50%+</strong></li>
          <li>Physical swelling or damage</li>
          <li>Frequent charging needed (daily to twice daily)</li>
        </ul>

        <h3>Cost Considerations</h3>
        <p><strong>Battery replacement costs:</strong></p>
        <ul>
          <li>Entry-level models: ₹25,000-30,000</li>
          <li><strong>Best electric scooter in Bihar</strong> (premium): ₹35,000-45,000</li>
          <li>Labor charges: ₹2,000-3,000</li>
        </ul>

        <h2>Real Owner Experiences</h2>

        <blockquote>
          <p>"Following the 20-80 charging rule, my Royal's battery still gives 95% original range after 2.5 years. Worth the discipline."</p>
          <cite>— Amit Singh, Patna, 30 months ownership</cite>
        </blockquote>

        <blockquote>
          <p>"I used to fast-charge daily. Battery performance dropped in 18 months. Now I plan charging better and it makes a huge difference."</p>
          <cite>— Kavita Devi, Muzaffarpur, battery replacement experience</cite>
        </blockquote>

        <h2>Your Action Plan</h2>

        <p><strong>Week 1:</strong> Implement 20-80 charging rule<br>
        <strong>Week 2:</strong> Set up temperature monitoring routine<br>
        <strong>Month 1:</strong> Establish monthly maintenance schedule<br>
        <strong>Month 3:</strong> First professional battery health check</p>

        <p>Proper battery care isn't complicated, but it requires consistency. These simple habits will save you thousands in premature replacement costs.</p>

        <p><strong>Need professional battery service?</strong> Visit any Abhilashit Automobiles service center for comprehensive battery health analysis and expert maintenance advice.</p>
      `,
      publishedDate: "January 20, 2026",
      author: "Abhilashit Automobiles"
    },
    'ev-vs-petrol-performance-comparison': {
      title: "Electric vs Petrol Scooters: Which Actually Performs Better in 2026?",
      content: `
        <p><em>Published: January 25, 2026 | By Abhilashit Automobiles</em></p>

        <p>"Electric scooters are slow and boring." That's what skeptics said five years ago. Today? <strong>High-performance electric bikes</strong> are leaving petrol scooters in the dust at traffic lights across India.</p>

        <p>But performance isn't just about top speed. Real-world performance includes acceleration, maintenance downtime, fuel efficiency, and daily convenience. Let's settle this debate with hard data.</p>

        <h2>Acceleration: Electric Takes the Lead</h2>

        <h3>0-40 kmph Comparison</h3>

        <p><strong>Premium electric mobility</strong> models dominate city acceleration:</p>

        <p><strong>Electric Scooters:</strong></p>
        <ul>
          <li><strong>Legend DLX:</strong> 0-40 kmph in 4.2 seconds</li>
          <li><strong>Royal Prime:</strong> 0-40 kmph in 4.8 seconds</li>
          <li><strong>Royal:</strong> 0-40 kmph in 5.5 seconds</li>
        </ul>

        <p><strong>Comparable Petrol Scooters:</strong></p>
        <ul>
          <li>Honda Activa 6G: 0-40 kmph in 6.8 seconds</li>
          <li>TVS Jupiter: 0-40 kmph in 7.2 seconds</li>
          <li>Suzuki Access: 0-40 kmph in 6.5 seconds</li>
        </ul>

        <p><strong>Winner: Electric by 2-3 seconds</strong></p>

        <h3>Why Electric Accelerates Faster</h3>

        <p>Electric motors deliver <strong>instant torque</strong>. No clutch engagement, no gear changes, no lag. Press the throttle, and power hits the wheel immediately.</p>

        <p>Petrol engines need to build RPM, engage transmission, and overcome mechanical friction. That delay costs precious seconds in city traffic.</p>

        <h2>Top Speed Reality Check</h2>

        <h3>Highway Performance</h3>

        <p>Most riders never exceed 60 kmph in Indian traffic. Here's where both technologies perform:</p>

        <p><strong>Electric Scooters (Top Speed):</strong></p>
        <ul>
          <li>Legend DLX: 85 kmph</li>
          <li>Royal Prime: 75 kmph</li>
          <li>Royal: 65 kmph</li>
        </ul>

        <p><strong>Petrol Scooters (Top Speed):</strong></p>
        <ul>
          <li>Honda Activa 6G: 83 kmph</li>
          <li>TVS Jupiter: 87 kmph</li>
          <li>Suzuki Access: 90 kmph</li>
        </ul>

        <p><strong>Winner: Petrol (by small margin)</strong></p>

        <h2>Range and Fuel Efficiency</h2>

        <h3>Daily Commute Range</h3>

        <p><strong>Electric Range (Single Charge):</strong></p>
        <ul>
          <li>Legend DLX: 120-150 km</li>
          <li>Royal Prime: 80-100 km</li>
          <li>Royal: 60-80 km</li>
        </ul>

        <p><strong>Petrol Range (Single Tank):</strong></p>
        <ul>
          <li>Honda Activa 6G: 240-280 km</li>
          <li>TVS Jupiter: 260-300 km</li>
          <li>Suzuki Access: 220-260 km</li>
        </ul>

        <p><strong>Winner: Petrol for long trips</strong></p>

        <h3>Cost Per Kilometer</h3>

        <p><strong>Electric Operating Cost:</strong></p>
        <ul>
          <li>Electricity: ₹0.40-0.60 per km</li>
          <li>Maintenance: ₹0.15-0.25 per km</li>
          <li><strong>Total: ₹0.55-0.85 per km</strong></li>
        </ul>

        <p><strong>Petrol Operating Cost:</strong></p>
        <ul>
          <li>Fuel: ₹2.10-2.40 per km</li>
          <li>Maintenance: ₹0.45-0.65 per km</li>
          <li><strong>Total: ₹2.55-3.05 per km</strong></li>
        </ul>

        <p><strong>Winner: Electric (3x cheaper to operate)</strong></p>

        <h2>Real-World User Experiences</h2>

        <h3>City Commuting (Patna Traffic)</h3>

        <blockquote>
          <p>"My Legend DLX beats every Activa from red lights. The instant acceleration is addictive. Plus, I spend ₹300 monthly on electricity vs ₹2,500 my friend spends on petrol for the same commute."</p>
          <cite>— Rohit Kumar, Software Engineer, 14 months ownership</cite>
        </blockquote>

        <h3>Mixed Usage (City + Highway)</h3>

        <blockquote>
          <p>"I kept my Activa for long trips and bought a Royal Prime for daily use. <strong>Best electric scooter in Bihar</strong> for city rides, but I still prefer petrol for weekend highway trips to Bodh Gaya."</p>
          <cite>— Sunita Sharma, Teacher, 8 months dual ownership</cite>
        </blockquote>

        <h2>Performance Comparison Table</h2>

        <table>
          <thead>
            <tr>
              <th>Factor</th>
              <th>Electric</th>
              <th>Petrol</th>
              <th>Winner</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0-40 kmph</td>
              <td>4-6 sec</td>
              <td>6-8 sec</td>
              <td>Electric</td>
            </tr>
            <tr>
              <td>Top Speed</td>
              <td>65-85 kmph</td>
              <td>83-90 kmph</td>
              <td>Petrol</td>
            </tr>
            <tr>
              <td>Operating Cost</td>
              <td>₹0.6/km</td>
              <td>₹2.8/km</td>
              <td>Electric</td>
            </tr>
            <tr>
              <td>Range</td>
              <td>60-150 km</td>
              <td>240-300 km</td>
              <td>Petrol</td>
            </tr>
            <tr>
              <td>Maintenance</td>
              <td>Minimal</td>
              <td>High</td>
              <td>Electric</td>
            </tr>
            <tr>
              <td>Technology</td>
              <td>Advanced</td>
              <td>Basic</td>
              <td>Electric</td>
            </tr>
          </tbody>
        </table>

        <h2>The Verdict: Choose Based on Usage</h2>

        <h3>Electric is Better For:</h3>
        <ul>
          <li><strong>Daily city commuting under 60 km</strong></li>
          <li>Cost-conscious riders</li>
          <li>Environmentally aware users</li>
          <li>Tech enthusiasts</li>
          <li>Multiple short trips per day</li>
        </ul>

        <h3>Petrol is Better For:</h3>
        <ul>
          <li><strong>Long-distance touring (100+ km daily)</strong></li>
          <li>Rural areas with limited charging</li>
          <li>Users who can't plan charging</li>
          <li>Budget buyers (lower upfront cost)</li>
          <li>Riders needing proven reliability</li>
        </ul>

        <h2>Making the Right Choice in 2026</h2>

        <p><strong>For 80% of Indian riders,</strong> electric scooters now offer superior performance where it matters most: city acceleration, operating costs, and daily convenience.</p>

        <p><strong>For long-distance riders</strong> or those in areas with poor charging infrastructure, petrol still makes sense.</p>

        <p>The performance debate is settling. <strong>Affordable EV scooter</strong> technology has matured enough to match or exceed petrol in most real-world scenarios.</p>

        <p>Visit Abhilashit Automobiles for back-to-back test rides of both technologies. Our experts will help you choose based on your specific riding needs and preferences.</p>

        <p><strong>Book comparative test rides today</strong> and experience the performance difference yourself.</p>
      `,
      publishedDate: "January 25, 2026",
      author: "Abhilashit Automobiles"
    }
  };

  return blogPosts[slug] || null;
};

export async function generateMetadata({ params }) {
  const post = await getBlogPost(params.slug);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found | Abhilashit Automobiles',
    };
  }

  const baseUrl = 'https://abhilashitautomobiles.com'; // Update with your actual domain
  
  return {
    title: `${post.title} | Abhilashit Automobiles`,
    description: post.title.includes('Save') 
      ? 'Discover how electric scooters can save you ₹50,000+ annually with real cost breakdowns, maintenance savings, and customer experiences from Bihar.'
      : post.title.includes('Battery')
      ? 'Simple daily habits can double your battery lifespan. Professional maintenance tips, charging best practices, and troubleshooting guides.'
      : 'Electric scooters now dominate city acceleration and cost efficiency. Real-world performance comparison with hard data and user experiences.',
    keywords: 'electric scooter savings, EV cost calculation, electric vehicle Bihar, battery range, charging time, premium electric mobility',
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: 'Expert insights on electric vehicles from Abhilashit Automobiles',
      type: 'article',
      publishedTime: post.publishedDate,
      authors: [post.author],
      siteName: 'Abhilashit Automobiles',
      images: [
        {
          url: `${baseUrl}/logo.png`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: 'Expert insights on electric vehicles from Abhilashit Automobiles',
      images: [`${baseUrl}/logo.png`],
    },
    alternates: {
      canonical: `${baseUrl}/blogs/${params.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <BlogPost 
        title={post.title}
        content={post.content}
        publishedDate={post.publishedDate}
        author={post.author}
        readTime="8 min read"
        slug={params.slug}
      />
    </div>
  );
}