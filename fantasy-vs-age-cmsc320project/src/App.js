import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="header">
        <div className="container">
          <h1>Fall 2025 Data Science Project</h1>
          <h2>Analyzing Age's Impact on NFL Fantasy Performance</h2>
          <p className="author">Vibhas Ramani, Nathan Danko, Natanel Solomonov, Anthony van Rheenen</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container">
        
        {/* Contributions Section */}
        <section id="contributions">
          <h2>Contributions</h2>
          
          <div className="contribution-item">
            <h3>Vibhas Ramani</h3>
            <ul>
              <li><strong>A: main point</strong> — [1-2 sentence description ]</li>
              {/*         COPY AND PASTE THIS FORMAT TO ADD MORE POINTS:   <li><strong> main point </strong> desciption     */}
            </ul>
          </div>
          <div className="contribution-item">
            <h3>Nathan Danko</h3>
            <ul>
              <li><strong>A: main point</strong> — [1-2 sentence description ]</li>
              {/*         COPY AND PASTE THIS FORMAT TO ADD MORE POINTS:   <li><strong> main point </strong> desciption     */}
            </ul>
          </div>
          <div className="contribution-item">
            <h3>Natanel Solomonov</h3>
            <ul>
              <li><strong>A: main point</strong> — [1-2 sentence description ]</li>
              {/*         COPY AND PASTE THIS FORMAT TO ADD MORE POINTS:   <li><strong> main point </strong> desciption     */}
            </ul>
          </div>
          <div className="contribution-item">
            <h3>Anthony van Rheenen</h3>
            <ul>
              <li><strong>A: main point</strong> — [1-2 sentence description ]</li>
              {/*         COPY AND PASTE THIS FORMAT TO ADD MORE POINTS:   <li><strong> main point </strong> desciption     */}
            </ul>
          </div>
        </section>

        {/* Introduction Section */}
        {/* TO ADD MORE POINTS WITH THIS SAME SPACING U SEE, SIMPLY USE THE <p> TAG AND WRITE IN, IF U WANT TO MAKE ANYTHING 
        BOLD USE AS SHOWN PRIOR <strong>. IF U WANT EVEN BIGGER SPACING THAN WHAT COMES FROM USING SEPARATE TAGS USE <br>*/}
        <section id="introduction">
          <h2>Introduction</h2>
          <p>
            [Introduce the research question: Does age affect NFL WR/TE fantasy performance?]
          </p>
          <p>
            [Why this matters for fantasy football, player evaluation, team management]
          </p>
          <p>
            [Brief overview of what analysis you'll conduct]
          </p>
        </section>

        {/* Data Curation Section */}
        {/* TO ADD MORE POINTS WITH THIS SAME SPACING U SEE, SIMPLY USE THE <p> TAG AND WRITE IN, IF U WANT TO MAKE ANYTHING 
        BOLD USE AS SHOWN PRIOR <strong>. IF U WANT EVEN BIGGER SPACING THAN WHAT COMES FROM USING SEPARATE TAGS USE <br>*/}

        <section id="data-curation">
          <h2>Data Curation</h2>
          
          <h3>Data Source</h3>
          <p>
            Dataset: <a href="https://www.kaggle.com/datasets/philiphyde1/nfl-stats-1999-2022/data" target="_blank" rel="noopener noreferrer">NFL Stats 1999-2022 (Kaggle)</a>
          </p>
          <p>
            [Explain what the dataset contains: player stats from 2012-2024, why it's comprehensive]
          </p>
          
          <h3>Data Preprocessing</h3>
          <p>
            [Describe filtering for WR/TE positions, calculating age, selecting relevant columns]
          </p>
          
          <div className="code-block">
            <pre>
              <code>
                {/* JUST PASE THE CODE U WANT IN THIS, IF U WANT MORE CODE SECTIONS, USE ANOTHER CODE TAG <code> */}
{`def organize_player_stats():
    offense_df = pd.read_csv('yearly_player_stats_offense.csv')
    wr_te_df = offense_df[offense_df['position'].isin(['WR', 'TE'])].copy()
    wr_te_df['age'] = wr_te_df['season'] - wr_te_df['birth_year']
    # ... additional preprocessing`}
              </code>
            </pre>
          </div>
          
          <div className="data-table">
            <h3>Sample of Cleaned Data</h3>
            <table>
              <thead>
                <tr>
                  <th>Player Name</th>
                  <th>Position</th>
                  <th>Age</th>
                  <th>Season</th>
                  <th>Team</th>
                  <th>Fantasy Points (PPR)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>[Example]</td>
                  <td>WR</td>
                  <td>25</td>
                  <td>2023</td>
                  <td>KC</td>
                  <td>142</td>
                </tr>
                <tr>
                  <td>[Example]</td>
                  <td>TE</td>
                  <td>28</td>
                  <td>2022</td>
                  <td>SF</td>
                  <td>87</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Exploratory Data Analysis Section */}
        <section id="eda">
          <h2>Exploratory Data Analysis</h2>
          
          <h3>Descriptive Statistics</h3>
          <p>
            [Summary of findings: WR vs TE performance differences, age distributions, etc.]
          </p>
          
          <div className="chart-container">
            <img src="/path-to-image-3.png" alt="Distribution of Fantasy Points" style={{width: '100%', maxWidth: '700px'}} />
            <p className="caption">
              <strong>Figure 1:</strong> Distribution of Fantasy Points (PPR). [Describe the right-skewed distribution, 
              most players scoring low, few high performers]
            </p>
          </div>

          <div className="chart-container">
            <img src="/path-to-image-4.png" alt="TE Fantasy Points Distribution" style={{width: '100%', maxWidth: '700px'}} />
            <p className="caption">
              <strong>Figure 2:</strong> Distribution of Fantasy Points for Tight Ends. [Compare to overall distribution]
            </p>
          </div>

          <div className="chart-container">
            <img src="/path-to-image-5.png" alt="WR Fantasy Points Distribution" style={{width: '100%', maxWidth: '700px'}} />
            <p className="caption">
              <strong>Figure 3:</strong> Distribution of Fantasy Points for Wide Receivers. [Note similarities/differences 
              with TE distribution]
            </p>
          </div>

          <h3>Age Group Analysis</h3>
          <p>
            [Discuss findings from age group boxplot analysis]
          </p>

          <div className="chart-container">
            <img src="/path-to-image-1.png" alt="Fantasy Points by Age Group" style={{width: '100%', maxWidth: '700px'}} />
            <p className="caption">
              <strong>Figure 4:</strong> Fantasy PPR Points by Age Group. Younger players (21-25) show more outliers 
              representing breakout performances, while older age groups have more consistent medians but fewer extremes.
            </p>
          </div>

          <h3>Average Performance by Age</h3>
          
          <div className="chart-container">
            <img src="/path-to-image-6.png" alt="Average Fantasy Points by Age" style={{width: '100%', maxWidth: '700px'}} />
            <p className="caption">
              <strong>Figure 5:</strong> Average Fantasy Points (PPR) by Age. [Describe the irregular pattern, 
              lack of clear linear trend, dramatic drop after age 37]
            </p>
          </div>
        </section>

        {/* Hypothesis Testing Section */}
        <section id="hypothesis-testing">
          <h2>Hypothesis Testing</h2>
          
          <h3>ANOVA Test</h3>
          <p>
            [Describe ANOVA test comparing mean fantasy points across age groups]
          </p>
          <p>
            <strong>Results:</strong> [P-value and interpretation]
          </p>
          <p>
            [Conclusion about statistical significance of age groups]
          </p>
        </section>

        {/* Primary Analysis Section */}
        <section id="primary-analysis">
          <h2>Primary Analysis</h2>
          
          <h3>Correlation Analysis</h3>
          <p>
            <strong>Method:</strong> Pearson Correlation Coefficient
          </p>
          <p>
            [Explain why Pearson correlation was chosen to measure linear relationship between age and fantasy points]
          </p>

          <div className="results-box">
            <p><strong>Pearson Correlation Results:</strong></p>
            <ul>
              <li><strong>Overall:</strong> r = 0.055, p = 4.135e-04 (Negligible positive correlation)</li>
              <li><strong>Tight Ends:</strong> r = 0.128, p = 1.109e-06 (Weak positive correlation)</li>
              <li><strong>Wide Receivers:</strong> r = 0.050, p = 1.073e-02 (Negligible positive correlation)</li>
            </ul>
          </div>

          <div className="chart-container">
            <img src="/path-to-image-7.png" alt="Overall Age vs Fantasy Points" style={{width: '100%', maxWidth: '700px'}} />
            <p className="caption">
              <strong>Figure 6:</strong> Overall Age vs Average Fantasy Points (PPR). The line plot shows high variability 
              with no clear linear trend, supporting the negligible correlation coefficient.
            </p>
          </div>

          <div className="chart-container">
            <img src="/path-to-image-8.png" alt="TE Age vs Fantasy Points" style={{width: '100%', maxWidth: '700px'}} />
            <p className="caption">
              <strong>Figure 7:</strong> TE Age vs Average Fantasy Points. Tight ends show a gradual upward trajectory 
              from ages 22-37 before sharp decline, explaining the slightly stronger correlation (r = 0.128).
            </p>
          </div>

          <div className="chart-container">
            <img src="/path-to-image-9.png" alt="WR Age vs Fantasy Points" style={{width: '100%', maxWidth: '700px'}} />
            <p className="caption">
              <strong>Figure 8:</strong> WR Age vs Average Fantasy Points. Wide receivers exhibit extreme volatility 
              with dramatic swings between adjacent ages, resulting in negligible correlation.
            </p>
          </div>

          <h3>Polynomial Regression</h3>
          <p>
            [Describe polynomial regression attempt and its poor performance]
          </p>

          <div className="chart-container">
            <img src="/path-to-image-2.png" alt="Predicted vs Actual" style={{width: '100%', maxWidth: '700px'}} />
            <p className="caption">
              <strong>Figure 9:</strong> Polynomial Regression - Fantasy Points vs Age. The nearly flat regression line 
              with R² = 0.0126 indicates age explains only 1% of fantasy point variance.
            </p>
          </div>

          <div className="results-box">
            <p><strong>Polynomial Regression Performance:</strong></p>
            <ul>
              <li><strong>R² Score:</strong> 0.0126 (explains only 1% of variance)</li>
              <li><strong>MSE:</strong> [value]</li>
            </ul>
            <p>
              The near-zero R² confirms that age alone is insufficient for predicting fantasy performance.
            </p>
          </div>
        </section>

        {/* Machine Learning Models Section */}
        <section id="ml-models">
          <h2>Machine Learning Models</h2>
          
          <h3>Random Forest Regression</h3>
          <p>
            <strong>Reasoning:</strong> Random Forest was chosen because it handles non-linear relationships well. 
            Since Pearson correlation showed weak linear relationships, we tested whether non-linear modeling 
            could better capture age-performance patterns.
          </p>
          
          <h3>Model Configuration</h3>
          <ul>
            <li><strong>Features:</strong> Age and Position (one-hot encoded)</li>
            <li><strong>Target:</strong> Fantasy Points (PPR)</li>
            <li><strong>Parameters:</strong> 300 estimators, 80-20 train-test split</li>
          </ul>

          <div className="code-block">
            <pre>
              <code>
{`rf_model = RandomForestRegressor(
    n_estimators=300,
    random_state=42,
    n_jobs=-1
)

rf_pipeline = Pipeline(steps=[
    ("preprocess", processed),
    ("model", rf_model)
])`}
              </code>
            </pre>
          </div>

          <div className="results-box">
            <p><strong>Random Forest Results:</strong></p>
            <ul>
              <li><strong>R² Score:</strong> -0.015 (performs worse than baseline mean prediction)</li>
              <li><strong>RMSE:</strong> 71.47</li>
              <li><strong>MAE:</strong> 57.82</li>
            </ul>
            <p>
              The negative R² indicates the model performs worse than simply predicting the mean fantasy 
              score for all players, confirming age contributes minimally to fantasy performance prediction.
            </p>
          </div>

          <h3>K-Means Clustering</h3>
          <p>
            <strong>Reasoning:</strong> Clustering analysis was used to identify natural groupings in the data 
            based on age and position, and to examine if distinct player archetypes emerge.
          </p>

          <div className="results-box">
            <p><strong>K-Means Clustering Results (k=5):</strong></p>
            <ul>
              <li><strong>Silhouette Score:</strong> 0.525 (moderate cluster quality)</li>
              <li><strong>Cluster 0:</strong> Young WR (avg age 23.97, 73.4 PPR points)</li>
              <li><strong>Cluster 1:</strong> Prime WR (avg age 28.45, 84.9 PPR points)</li>
              <li><strong>Cluster 2:</strong> Young TE (avg age 24.21, 47.1 PPR points)</li>
              <li><strong>Cluster 3:</strong> Veteran Mixed (avg age 33.38, 72.7 PPR points)</li>
              <li><strong>Cluster 4:</strong> Older TE (avg age 28.56, 59.4 PPR points)</li>
            </ul>
          </div>

          <p>
            [Interpret clustering results: position matters more than age, WRs consistently outscore TEs, 
            veteran cluster shows positional differences become less pronounced]
          </p>
        </section>

        {/* Visualization Section */}
        <section id="visualization">
          <h2>Key Visualizations Summary</h2>
          <p>
            [Summarize the main visual insights from your analysis]
          </p>
          
          <h3>Distribution Patterns</h3>
          <p>
            [Discuss what the distribution histograms revealed about fantasy point scoring patterns]
          </p>

          <h3>Age-Performance Relationship</h3>
          <p>
            [Explain what the scatter plots and line plots show about the weak age-performance correlation]
          </p>

          <h3>Position Differences</h3>
          <p>
            [Highlight key differences between WR and TE performance patterns across age groups]
          </p>
        </section>

        {/* Insights and Conclusions Section */}
        <section id="conclusion">
          <h2>Insights and Conclusions</h2>
          
          <h3>Key Findings</h3>
          <ul>
            <li>
              <strong>Negligible Age-Performance Correlation:</strong> Across all analyses (Pearson r = 0.055), 
              age shows minimal linear relationship with fantasy football performance. Age explains only 1% 
              of performance variance.
            </li>
            <li>
              <strong>Position Matters More Than Age:</strong> Wide receivers consistently outscore tight ends 
              regardless of age group. WR clusters averaged 73-85 PPR points while TE clusters averaged 47-59 points.
            </li>
            <li>
              <strong>Young Player Volatility:</strong> The 21-25 age group shows more outliers, likely due to 
              variable playing time. Younger breakout players can achieve elite performance despite age.
            </li>
            <li>
              <strong>Non-Linear Patterns:</strong> Neither polynomial regression nor Random Forest could effectively 
              predict performance from age, suggesting other factors (opportunity, talent, scheme fit) dominate.
            </li>
            <li>
              <strong>Career Longevity Cliff:</strong> While age 22-37 shows irregular patterns, there's a dramatic 
              decline after age 37, indicating a clear endpoint for elite fantasy production.
            </li>
          </ul>

          <h3>Discussion</h3>
          <p>
            [Elaborate on why age has minimal predictive power. Discuss confounding variables like 
            playing time, team quality, coaching scheme, injury history, talent level]
          </p>
          <p>
            [Explain practical implications: fantasy managers should prioritize opportunity and role 
            over age when evaluating players in the 22-35 range]
          </p>
          <p>
            [Discuss the clustering findings: natural player archetypes exist based on position and 
            career stage, but age alone doesn't determine fantasy value]
          </p>

          <h3>Limitations</h3>
          <ul>
            <li>
              <strong>Missing Variables:</strong> The dataset doesn't account for playing time (snaps, targets), 
              team offensive quality, coaching schemes, or injury history—all factors that likely have stronger 
              predictive power than age.
            </li>
            <li>
              <strong>Survivorship Bias:</strong> Dataset only includes players who made NFL rosters. Older players 
              in the data are likely more talented than average, potentially masking age-related decline.
            </li>
            <li>
              <strong>Aggregation Level:</strong> Season-level data may obscure within-season trends or game-to-game 
              variability that better captures age effects.
            </li>
            <li>
              <strong>Era Effects:</strong> NFL rule changes and offensive evolution from 2012-2024 may confound 
              age-performance relationships.
            </li>
          </ul>

          <h3>Future Work</h3>
          <ul>
            <li>
              Incorporate opportunity metrics (targets, snap counts, team pass attempts) as control variables 
              to isolate age's true effect on efficiency rather than volume.
            </li>
            <li>
              Apply causal inference techniques (matching, propensity scores) to control for confounding 
              variables and establish more rigorous age-performance relationships.
            </li>
            <li>
              Analyze game-level data rather than season aggregates to capture short-term performance trends 
              and injury impacts.
            </li>
            <li>
              Extend analysis to other positions (RB, QB) where age effects may be more pronounced due to 
              different physical demands.
            </li>
            <li>
              Investigate interaction effects between age and other factors (draft capital, contract year, 
              offensive scheme) that might moderate age's impact.
            </li>
          </ul>

          <h3>Final Thoughts</h3>
          <p>
            This analysis demonstrates that age alone is not a reliable predictor of fantasy football performance 
            for NFL wide receivers and tight ends. While conventional wisdom suggests player performance peaks 
            in late twenties, our data reveals a more complex reality with high individual variance and weak 
            correlation (r = 0.055).
          </p>
          <p>
            The negligible predictive power of age-based models (R² of -0.015 for Random Forest) indicates that 
            factors such as opportunity, talent, scheme fit, and team context dominate fantasy outcomes. For 
            fantasy football managers, this suggests that player age should be a secondary consideration compared 
            to role security, target share, and offensive efficiency.
          </p>
          <p>
            Position differences emerged as more significant than age differences, with wide receivers consistently 
            outscoring tight ends across all age groups. The K-Means clustering revealed that while natural player 
            archetypes exist, they're more strongly defined by position and role than by age.
          </p>
          <p>
            Future research incorporating playing time, team context, and efficiency metrics would provide a more 
            complete picture of how age interacts with other factors to influence fantasy performance. This work 
            establishes a foundation for understanding that in fantasy football, opportunity and talent matter 
            more than age.
          </p>
        </section>

        {/* References Section */}
        <section id="references">
          <h2>References</h2>
          <ol>
            <li>
              Hyde, Philip. (2022). NFL Stats 1999-2022. Kaggle. 
              <a href="https://www.kaggle.com/datasets/philiphyde1/nfl-stats-1999-2022/data" target="_blank" rel="noopener noreferrer">
                https://www.kaggle.com/datasets/philiphyde1/nfl-stats-1999-2022/data
              </a>
            </li>
            <li>
              Pedregosa, F., et al. (2011). Scikit-learn: Machine Learning in Python. Journal of Machine Learning Research, 12, 2825-2830.
            </li>
            <li>
              McKinney, W. (2010). Data Structures for Statistical Computing in Python. Proceedings of the 9th Python in Science Conference, 56-61.
            </li>
          </ol>
        </section>

      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>CMSC320 Fall 2025 Final Project</p>
          <p>University of Maryland, College Park</p>
        </div>
      </footer>
    </div>
  );
}

export default App;