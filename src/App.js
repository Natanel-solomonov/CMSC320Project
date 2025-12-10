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
              <li><strong>Website Skeleton</strong> — Made the skeleton for this website for us to develop: essentially made a rudimentary outline which we could then fill in with info. I also got it deployed on github pages.</li>
              <li><strong>Version Control</strong> — helped maintain the git version control of the website. I aided with conflicts, errors causing github pages to not work, and ensuring everyone's info was cohesively together on the latest branch.</li>
              <li><strong>Pearson Correlation</strong> — I did everything relating to the pearson correlation of the statistics we had, showcased my insights and conclusions of it and graphed it.</li>
              <li><strong>Random Forest</strong> — I used Random Forest on the data we had to approve or deny the conclusion I made prior with pearson_correlation, explained why I used it and showed my insights and conclusions of it.</li>
              <li><strong>Summary of parts</strong> — Contributed to D, E, F, G, H shown on final project pdf on elms.</li>
              {/*         COPY AND PASTE THIS FORMAT TO ADD MORE POINTS:   <li><strong> main point </strong> desciption     */}
            </ul>
          </div>
          <div className="contribution-item">
            <h3>Nathan Danko</h3>
            <ul>
              <li><strong>Hypothesis testing</strong> — Conducted a one-way Anova test to determine if there was a relationship between age groups and fantasy points, showcased insights and conclutions, and graphed the data.</li>
              <li><strong>Polynomial Regression</strong> — Used Polynomial Regression model to determine the effects of Age on a players Fantasy points.</li>
              <li><strong>Summary of Parts</strong> — Contributed to B, C, D, E shown on final project pdf on elms.</li>
              {/*         COPY AND PASTE THIS FORMAT TO ADD MORE POINTS:   <li><strong> main point </strong> desciption     */}
            </ul>
          </div>
          <div className="contribution-item">
            <h3>Natanel Solomonov</h3>
            <ul>
              <li><strong>Data Curation/Pre Processing</strong> — I found a complete dataset on kaggle of exhaustive statisitcs from NFL players from 2012-2014, I then determined what data was ultra important for our study such as age and overall fantasy points. I then cleaned the data and narrowed it down to this information only for a clean and reliable study.</li>
              <li><strong>Conclusion</strong> — I made an overall conclusion, based on our testing and analysis that age did not play a signficant factor in fantasy performance in comparison to other important factors.</li>
              <li><strong>Summary of parts</strong> — Contributed to the Introduction (G), Data Curation (B), Conclusion (F) as shown in the final project pdf on elms. </li>

              {/*         COPY AND PASTE THIS FORMAT TO ADD MORE POINTS:   <li><strong> main point </strong> desciption     */}
            </ul>
          </div>
          <div className="contribution-item">
            <h3>Anthony van Rheenen</h3>
            <ul>
              <li><strong>Data Exploration and Summary Statistics</strong> — Collected descriptive statistics of the dataset. Summarized initial data while collecting important information about the dataset.</li>
              <li><strong>Data Visualization</strong> — Plotted data to help understand and visualize it.</li>
              <li><strong>ML Algorithm Training and Test Data Analysis, K-Means Clustering</strong> — Ran K-Means clustering on the data to discover important relations between player position, age, and fantasy points.</li>
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
            This project investigates the research question:{" "}
            <strong>
              Does age affect NFL wide receiver and tight end fantasy
              performance?
            </strong>{" "}
            Understanding how player age correlates with fantasy production is
            valuable not only for <strong>fantasy football managers</strong>{" "}
            looking to optimize draft strategies and manage roster risk, but
            also for broader{" "}
            <strong>player evaluation and team decision-making</strong>, where
            ageing influences contracts, depth-chart planning, and long-term
            roster construction. To answer this question, the analysis will
            examine <strong>multi-year NFL WR/TE performance data</strong>,
            compare fantasy output across age groups, and evaluate trends using
            statistical methods such as{" "}
            <strong>
              correlation analysis, regression modeling, and visualization of
              performance trajectories
            </strong>
            . This approach will help identify whether age is a meaningful
            predictor of fantasy performance and where key performance drop-offs
            or peaks occur.
          </p>
        </section>

        {/* Data Curation Section */}
        {/* TO ADD MORE POINTS WITH THIS SAME SPACING U SEE, SIMPLY USE THE <p> TAG AND WRITE IN, IF U WANT TO MAKE ANYTHING 
        BOLD USE AS SHOWN PRIOR <strong>. IF U WANT EVEN BIGGER SPACING THAN WHAT COMES FROM USING SEPARATE TAGS USE <br>*/}
        <hr />
        <section id="data-curation">
          <h2>Data Curation</h2>

          <h3>Data Source</h3>
          <p>
            Dataset:{" "}
            <a
              href="https://www.kaggle.com/datasets/philiphyde1/nfl-stats-1999-2022/data"
              target="_blank"
              rel="noopener noreferrer"
            >
              NFL Stats 1999-2022 (Kaggle)
            </a>
          </p>
          <p>
            To begin answering our research question, we looked for a data set with the information we needed, then cleaned it so it would be ready for processing.
            The <strong>offense_stats_organized.csv</strong> dataset provides a
            comprehensive foundation for our age-performance analysis. The
            dataset contains <strong>7,133 player-season observations</strong>{" "}
            spanning <strong>13 seasons (2012-2024)</strong>, covering{" "}
            <strong>1,600 unique players</strong> across multiple positions.
            This extensive temporal coverage allows us to track player
            performance trajectories across different career stages, from
            rookies entering the league to veterans in their late 30s. The
            dataset includes <strong>660 columns</strong> of detailed
            statistics, providing rich context for each player's performance
            including receiving yards, touchdowns, targets, receptions, and
            fantasy point calculations. The multi-year structure enables
            longitudinal analysis, allowing us to observe how individual
            players' fantasy production changes as they age, rather than relying
            solely on cross-sectional comparisons. This comprehensive coverage
            across seasons, players, and statistical dimensions makes the
            dataset well-suited for investigating age-related performance
            patterns in NFL wide receivers and tight ends.
          </p>

          <h3>Data Preprocessing</h3>
          <p>
            To focus our analysis on the specific research question, we
            performed targeted data cleaning and filtering. The preprocessing
            pipeline filters for <strong>WR and TE positions only</strong>,
            calculates player age for each season, selects relevant columns,
            handles missing values, and organizes the data for analysis. This
            process transforms the raw dataset from 7,133 observations across
            660 columns into a focused dataset of 4,083 WR/TE player-season
            records with only the essential variables needed for age-performance
            analysis.
          </p>
          <p>
            The cleaning process works by first filtering the dataset to include
            only wide receivers and tight ends, as these are the positions of
            interest for our research question. We then calculate each player's
            age during each season by subtracting their birth year from the
            season year. This age calculation is crucial for our analysis, as it
            allows us to examine performance patterns across different age
            groups. Next, we select only the columns relevant to our study:
            player identification, position, age, season, team, and fantasy
            point metrics. Missing values are replaced with 'N/A' to clearly
            indicate data gaps rather than leaving them blank. Fantasy points
            are rounded to whole numbers for cleaner presentation. Finally, the
            data is sorted by position, player name, and season to ensure all of
            a player's seasons appear consecutively, making it easier to track
            individual career trajectories. This focused preprocessing helps us
            hone in on exactly the data we need to answer our research question
            about age's impact on fantasy performance.
          </p>          
          <div className="code-block">
            <pre>
              <code>
                {/* JUST PASE THE CODE U WANT IN THIS, IF U WANT MORE CODE SECTIONS, USE ANOTHER CODE TAG <code> */}
{`def organize_player_stats():
    """
    Organize offensive player stats for WR and TE positions only.
    Creates a clean CSV with specific columns including calculated age.
    """

    # Load offensive data
    offense_df = pd.read_csv('yearly_player_stats_offense.csv')

    # Filter for only WR and TE positions
    wr_te_df = offense_df[offense_df['position'].isin(['WR', 'TE'])].copy()

    # Calculate age for each season
    # Age = Season - Birth Year
    wr_te_df['age'] = wr_te_df['season'] - wr_te_df['birth_year']

    # Select only the required columns
    selected_columns = [
        'player_id',
        'player_name',
        'position',
        'age',
        'season',
        'team',
        'fantasy_points_ppr',
        'fantasy_points_standard'
    ]

    # Create the cleaned dataframe with only selected columns
    cleaned_df = wr_te_df[selected_columns].copy()

    # Replace NaN values with 'N/A' for better readability
    cleaned_df = cleaned_df.fillna('N/A')

    # Convert data types
    cleaned_df['player_id'] = cleaned_df['player_id'].astype(str)
    cleaned_df['player_name'] = cleaned_df['player_name'].astype(str)
    cleaned_df['position'] = cleaned_df['position'].astype(str)
    cleaned_df['team'] = cleaned_df['team'].astype(str)

    # Convert numeric columns, keeping 'N/A' for missing values
    numeric_columns = ['age', 'season', 'fantasy_points_ppr', 'fantasy_points_standard']
    for col in numeric_columns:
        cleaned_df[col] = pd.to_numeric(cleaned_df[col], errors='coerce')
        # Replace NaN with 'N/A' after conversion
        cleaned_df[col] = cleaned_df[col].fillna('N/A')

    # Round fantasy points to nearest whole number
    cleaned_df['fantasy_points_ppr'] = cleaned_df['fantasy_points_ppr'].apply(lambda x: round(x) if x != 'N/A' else x)
    cleaned_df['fantasy_points_standard'] = cleaned_df['fantasy_points_standard'].apply(lambda x: round(x) if x != 'N/A' else x)

    # Sort by position (WR first, then TE), then by player name alphabetically, then by season
    cleaned_df = cleaned_df.sort_values(['position', 'player_name', 'season'])

    # Save the cleaned CSV
    cleaned_df.to_csv('wr_te_stats_cleaned.csv', index=False)

    return cleaned_df`}
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
                  <th>Fantasy Points (Standard)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ja'Marr Chase</td>
                  <td>WR</td>
                  <td>21</td>
                  <td>2021</td>
                  <td>CIN</td>
                  <td>292</td>
                  <td>211</td>
                </tr>
                <tr>
                  <td>Ja'Marr Chase</td>
                  <td>WR</td>
                  <td>23</td>
                  <td>2023</td>
                  <td>CIN</td>
                  <td>252</td>
                  <td>155</td>
                </tr>
                <tr>
                  <td>Stefon Diggs</td>
                  <td>WR</td>
                  <td>22</td>
                  <td>2015</td>
                  <td>MIN</td>
                  <td>143</td>
                  <td>91</td>
                </tr>
                <tr>
                  <td>Stefon Diggs</td>
                  <td>WR</td>
                  <td>25</td>
                  <td>2018</td>
                  <td>MIN</td>
                  <td>260</td>
                  <td>158</td>
                </tr>
                <tr>
                  <td>Travis Kelce</td>
                  <td>TE</td>
                  <td>28</td>
                  <td>2017</td>
                  <td>KC</td>
                  <td>228</td>
                  <td>144</td>
                </tr>
                <tr>
                  <td>Travis Kelce</td>
                  <td>TE</td>
                  <td>34</td>
                  <td>2023</td>
                  <td>KC</td>
                  <td>214</td>
                  <td>121</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <hr />
        {/* Exploratory Data Analysis Section */}
        <section id="eda">
          <h2>Exploratory Data Analysis</h2>
          <h4>After preparing and cleaning the dataset, we conducted exploratory data analysis to better understand the trends in the data before continuing statistical tests.</h4>
          <h3>Descriptive Statistics</h3>
          <p>
            Looking at the plots of the distributions of fantasy points, it's clear to see that while there are more wider recievers than tight ends, 
            both distributions follow the same general distribution of the total population.

            Looking at the plot of Age vs. Average fantasy points, there isn't any clear trends to be observed. While there is a bit of variance in the data, 
            we don't see any clear drops until the big drop past 37.5 years old.
          </p>

          <div className="code-block">
            <pre>
              <code>
{`def descriptive_stats():
  """
  Computes and displays descriptive statistics for the columns in the DF
  Category is either defense or offense
  """

  df = pd.read_csv('CleanedOffensive.csv')

  player_summary = (
    df.groupby(['player_name', 'position'])
      .agg({
          'fantasy_points_ppr': ['mean', 'sum', 'count'],
          'fantasy_points_standard': ['mean', 'sum', 'count'],
          'age': ['mean']
      })
      .round(2)
      .reset_index()
  )

  player_summary.columns = ['_'.join(col).strip() for col in player_summary.columns.values]
  player_summary = player_summary.reset_index()

  print("\n===== Per-Player Summary =====\n")
  print(player_summary.head())
  player_summary.to_csv("offensive_per_player_summary.csv", index=False)

  position_summary = (
      df.groupby('position')[['fantasy_points_ppr', 'fantasy_points_standard']]
        .agg(['mean', 'median', 'std', 'min', 'max'])
        .round(2)
  )
  print("\n===== WR vs TE Summary =====\n")
  print(position_summary)
  position_summary.to_csv("offensive_wr_te_summary.csv")

  top_ppr = df.nlargest(10, 'fantasy_points_ppr')[['player_name', 'team', 'season', 'fantasy_points_ppr']]
  print("\nTop 10 Players by PPR Fantasy Points:")
  print(top_ppr)
  top_ppr.to_csv("offensive_top10_ppr.csv", index=False)

  numeric = df.select_dtypes(include=[np.number])
  for col in numeric.columns:
    df[col] = pd.to_numeric(df[col], errors="coerce")

  print(f"\n==== Descriptive Statistics: WR and TE ====\n")
  print(df.describe().round(2))
  print("\n")

  grouped_stats = df.groupby('position').describe().round(2)
  print("Summary by Position:")
  print(grouped_stats)
  print("\n")

  missing = df.isnull().sum()
  print("Missing values by column:")
  print(missing[missing>0])
  print("\n")

  print("Correlation Matrix (Top 10 Columns):")
  corr = numeric.corr().round(2)
  print(corr.head(10))
  print("\n")

  df.describe().to_csv("offensive_overall_descriptive_stats.csv")
  grouped_stats.describe().to_csv("offensive_by_position_stats.csv")
  corr.to_csv("offensive_correlation_matrix.csv")
  print(f"Saved descriptive stats!")


if __name__ == "__main__":
    # defense_df, offense_df = organize_player_stats()
    descriptive_stats()`}
              </code>
            </pre>
          </div>

          <div className="code-block">
            <pre>
              <code>
{`def histogram():
  df = pd.read_csv("CleanedOffensive.csv")

  plt.figure(figsize=(8, 6))
  plt.hist(df["fantasy_points_ppr"], bins=20, edgecolor='black')
  plt.title("Distribution of Fantasy Points (PPR)")
  plt.xlabel("Fantasy Points (PPR)")
  plt.ylabel("Number of Players")

  positions = df["position"].unique()

  for pos in positions:
      plt.figure(figsize=(8, 6))
      subset = df[df["position"] == pos]
      plt.hist(subset["fantasy_points_ppr"], bins=20, edgecolor='black')
      plt.title(f"Distribution of Fantasy Points (PPR) for {pos}s")
      plt.xlabel("Fantasy Points (PPR)")
      plt.ylabel("Number of Players")
      plt.show()

  avg_points = df.groupby("age")["fantasy_points_ppr"].mean().reset_index()

  plt.figure(figsize=(8, 6))
  plt.bar(avg_points["age"], avg_points["fantasy_points_ppr"], edgecolor='black')
  plt.title("Average Fantasy Points (PPR) by Age")
  plt.xlabel("Age")
  plt.ylabel("Average Fantasy Points (PPR)")
  plt.grid(axis='y', linestyle='--', alpha=0.7)
  plt.show()


if __name__ == "__main__":
    histogram()
`}
              </code>
            </pre>
          </div>
          
          <div className="chart-container">
            <img src={`${process.env.PUBLIC_URL}/Distribution_of_Fantasy_Points_(PPR).png`} 
                 alt="Distribution of Fantasy Points" 
                 style={{width: '100%', maxWidth: '700px'}} 
                 />
            <p className="caption">
              <strong>Figure 1:</strong> Distribution of Fantasy Points (PPR). Data is right-skewed, with the vast majority of players being low scorers.
            </p>
          </div>

          <div className="chart-container">
            <img 
            src={`${process.env.PUBLIC_URL}/Distribution_of_Fantasy_Points_(PPR)_for_TEs.png`}
            alt="TE Fantasy Points Distribution" 
            style={{width: '100%', maxWidth: '700px'}} />
            <p className="caption">
              <strong>Figure 2:</strong> Distribution of Fantasy Points for Tight Ends. Follows a very similar distribution to the overall population.
            </p>
          </div>

          <div className="chart-container">
            <img 
            src={`${process.env.PUBLIC_URL}/Distribution_of_Fantasy_Points_(PPR)_for_WRs.png`} 
            alt="WR Fantasy Points Distribution" 
            style={{width: '100%', maxWidth: '700px'}} />
            <p className="caption">
              <strong>Figure 3:</strong> Distribution of Fantasy Points for Wide Receivers. Follows a very similar distribution to the overall population, but notably with lower point amounts than TE.
            </p>
          </div>

          <h3>Age Group Analysis</h3>
          <p>
            With these initial findings, we looked into whether grouping players by age showerd clearer patterns. Looking at the 21-25 age group, the median of fantasy points PPR is less than other age groups. As a player ages, the median tends to increase 
            until they fall into the 36-40 year age range. Although this is the case, it can be seen that younger players in the 21-25 age range have more 
            outliers than the others. In fact, there are almost zero outliers in the other age ranges. A causing factor of this could be the amount of playing 
            time they receive. As a player gets older, they tend to start more than the younger players. These outliers could represent the cases where young 
            players start, offering them more opportunities to earn fantasy points. Overall, there is a slight correlation between a players age and their 
            total fantasy points, with improvements until reaching 31-35, and tapering off after age 36.
          </p>

                    <div className="code-block">
            <pre>
              <code>
                {/* JUST PASE THE CODE U WANT IN THIS, IF U WANT MORE CODE SECTIONS, USE ANOTHER CODE TAG <code> */}
{`def hypothesisTesting():
  """
  Uses an ANOVA test to compare the mean fantasy points per player for different age groups
  """

  # Read descriptive stats
  df = pd.read_csv('offensive_per_player_summary.csv')

  # Defines bins for age groups
  bins = [20, 25, 30, 35, 40]

  # Labels given to each age gruop
  labels = ['21-25', '26-30', '31-35', '36-40']

  # bins age_mean values based on the bins specified
  df['age_group'] = pd.cut(df['age_mean'], bins=bins, labels=labels)

  # Goes through each player and assigns them a label based on their age_mean and
  # the bins specified above and then filters for only the players
  # fantasy_points_ppr_mean
  groups = [df[df['age_group'] == g]['fantasy_points_ppr_mean'] for g in labels]
  f_stat, p_val = stats.f_oneway(*groups)
  print(f"{p_val}")

  sns.boxplot(x='age_group', y='fantasy_points_ppr_mean', data=df)
  plt.title('Fantasy PPR Points by Age Group')
  plt.xlabel('Age Group')
  plt.ylabel('Fantasy PPR Points')
  plt.show()


if __name__ == "__main__":
    hypothesisTesting()`}
              </code>
            </pre>
          </div>

          <div className="chart-container">
            <img 
            src={`${process.env.PUBLIC_URL}/Fantasy_PPR_Points_by_Age_Group.png`}
            alt="Fantasy Points by Age Group" 
            style={{width: '100%', maxWidth: '700px'}} />
            <p className="caption">
              <strong>Figure 4:</strong> Fantasy PPR Points by Age Group. Younger players (21-25) show more outliers 
              representing breakout performances, while older age groups have more consistent medians but fewer extremes.
            </p>
          </div>

          <h3>Average Performance by Age</h3>
          
          <div className="chart-container">
            <img 
            src={`${process.env.PUBLIC_URL}/Average_Fantasy_Points_(PPR)_by_Age.png`} 
            alt="Average Fantasy Points by Age" 
            style={{width: '100%', maxWidth: '700px'}} />
            <p className="caption">
              <strong>Figure 5:</strong> Average Fantasy Points (PPR) by Age. The distribution doesn't seem to follow any clear patterns, except for a clear drop off in points in players older that 37.
            </p>
          </div>
        </section>
        
        <hr />

        {/* Hypothesis Testing Section */}
        <section id="hypothesis-testing">
          <h2>Hypothesis Testing</h2>
          <h4>While the plots seemed to show patters, we used hypothesis testing to determine whether the observed differences were actually statistically significant.</h4>
          <h3>ANOVA Test</h3>
          <p>
            To address the issue of repeated observations (players having multiple seasons), we calculated
            each player's mean age across their career. We then separated players into distinct age groups based 
            on the calculated average age and performed a one-way ANOVA test to determine if there were statistically
            significant differences in fantasy points between age groups.
          </p>
          <p>
            <strong>Results:</strong> 4.262567274305378e-09
          </p>
          <p>
            After conducting a one-way ANOVA test to determine if fantasy points differ significantly by age group,
            it was determined that the analysis yielded a p-value of 4.26 x 10^-9. This is well below the significance
            threshold of 0.05, thus we reject the null hypothesis that all age groups perform equally. This result confirms that age does
            play a factor in the fantasy points a player will score. 
          </p>
        </section>
        
        <hr />
        {/* Primary Analysis Section */}
        <section id="primary-analysis">
          <h2>Primary Analysis</h2>
          
          <h3>Correlation Analysis</h3>
          <p>
            <strong>Method:</strong> Pearson Correlation Coefficient
          </p>
          <p>
            With evidence that age groups may differ, we then measured the strength of the relationship between age and fantasy points using correlation analysis. The pearson correlation analysis revealed negligible but statistically significant relationships between player age and fantasy football 
            performance for offensive players. This can be concluded from the pearson results where the r {'<'} 0.1 therefore showing negligible linear 
            correlation, and a p value of 0.001 meaning that there was great statistic significance of this result; PPR scoring: r = 0.055, p {'<'} 0.001
            
            Nonetheless, there is one which showed some difference: Tight Ends with a r = 0.128, p {'<'} 0.001, which means there is a weak positive correlation 
            between age and fantasy points gained, as r {'>'} 0.1. However, since this is so weak and statistically significant, it can still be seen as somewhat 
            negligible in the grand scheme.

            As concurrent with the pearson's correlation results, the results from the graphs are very non-linear making it somewhat difficult to say that 
            there is a clear trend between age and fantasy points across the board.

            TE: Shows a general upward trajectory from ages 22-37 before the sharp decline, which explains their slightly stronger correlation (r = 0.128)

            WR: Show extreme volatility with dramatic swings between adjacent ages such as dropping from 91 PPR at age 22 to 74 at age 23, then spiking to 106 
            at age 34. As a result there is no clear correlation, and hence its low pearson correlation result.

            The overall graph is more akin to the TE, it has somewhat of a trend for certain ages, but there is no real linear correlation as it has some 
            unexplainable spikes.

            As a result the weak to negligible correlations accurately reflect the results gathered: there is no meaningful linear relationship between age 
            and fantasy football performance in this dataset. Additionally, due to such spikes at certain points, there is bound to be some confounding 
            variable which we may have not taken into consideration such as prior experience, or other constraints which we can handle using pair and matching 
            or some other confounfing control technique taught in class.
          </p>

        <div className="code-block">
            <pre>
              <code>
{`def pearson_correlation():
    df = pd.read_csv("CleanedOffensive.csv")
    alpha = 0.05

    def interpret_result(r, p, position=None):
        if abs(r) < 0.1:
            strength = "negligible"
        elif abs(r) < 0.3:
            strength = "weak"
        elif abs(r) < 0.5:
            strength = "moderate"
        else:
            strength = "strong"

        if position:
            return f"{strength.capitalize()} {('positive' if r > 0 else 'negative')} correlation for {position}. p{'<=' if p<alpha else '>='}0.05."
        else:
            return f"{strength.capitalize()} correlation overall. Statistically {'significant' if p<alpha else 'insignificant'} relationship."

    results = []
    r_ppr, p_ppr = pearsonr(df['age'], df['fantasy_points_ppr'])

    results.append(["Fantasy Points (PPR)", r_ppr, p_ppr, "Yes (p < 0.05)" if p_ppr < alpha else "No", interpret_result(r_ppr, p_ppr)])

    avg_by_age = df.groupby("age")["fantasy_points_ppr"].mean().reset_index()
    plt.figure(figsize=(8,5))
    plt.plot(avg_by_age["age"], avg_by_age["fantasy_points_ppr"], marker='o', linestyle='-', color='steelblue')
    plt.xlabel('Age')
    plt.ylabel('Average Fantasy Points (PPR)')
    plt.title(f'Overall: Age vs Average Fantasy Points (PPR)\nPearson r = {r_ppr:.3f}, p = {p_ppr:.3e}')
    plt.grid(True, linestyle='--', alpha=0.6)
    plt.savefig('overall_age_vs_fantasy_points_line.png')
    plt.show()


    for pos, group in df.groupby('position'):
        r, p = pearsonr(group['age'], group['fantasy_points_ppr'])
        results.append([pos, r, p, "Yes (p < 0.05)" if p < alpha else "No", interpret_result(r, p, pos)])

        avg_pos = group.groupby("age")["fantasy_points_ppr"].mean().reset_index()
        plt.figure(figsize=(8,5))
        plt.plot(avg_pos["age"], avg_pos["fantasy_points_ppr"], marker='o', linestyle='-', color='teal')
        plt.title(f"{pos}: Age vs Average Fantasy Points (PPR)\nPearson r = {r:.3f}, p = {p:.3e}")
        plt.xlabel("Age")
        plt.ylabel("Average Fantasy Points (PPR)")
        plt.grid(True, linestyle='--', alpha=0.6)
        plt.savefig(f"{pos}_age_vs_fantasy_points_line.png")
        plt.show()

    df_results = pd.DataFrame(results, columns=['Metric/Position', 'r', 'p', 'Significant?', 'Interpretation / Conclusion'])
    df_results.to_csv("Pearson_Correlation_Results.csv", index=False)

pearson_correlation()
`}
              </code>
            </pre>
          </div>

          <div className="results-box">
            <p><strong>Pearson Correlation Results:</strong></p>
            <ul>
              <li><strong>Overall:</strong> r = 0.055, p = 4.135e-04 (Negligible positive correlation)</li>
              <li><strong>Tight Ends:</strong> r = 0.128, p = 1.109e-06 (Weak positive correlation)</li>
              <li><strong>Wide Receivers:</strong> r = 0.050, p = 1.073e-02 (Negligible positive correlation)</li>
            </ul>
          </div>

          <div className="chart-container">
            <img 
            src={`${process.env.PUBLIC_URL}/Overall_Age_vs_Fantasy_Points.png`} 
            alt="Overall Age vs Fantasy Points" 
            style={{width: '100%', maxWidth: '700px'}} />
            <p className="caption">
              <strong>Figure 7:</strong> Overall Age vs Average Fantasy Points (PPR). The line plot shows high variability 
              with no clear linear trend, supporting the negligible correlation coefficient.
            </p>
          </div>

          <div className="chart-container">
            <img 
            src={`${process.env.PUBLIC_URL}/TE_Age_vs_Fantasy_Points.png`} 
            alt="TE Age vs Fantasy Points" 
            style={{width: '100%', maxWidth: '700px'}} />
            <p className="caption">
              <strong>Figure 8:</strong> TE Age vs Average Fantasy Points. Tight ends show a gradual upward trajectory 
              from ages 22-37 before sharp decline, explaining the slightly stronger correlation (r = 0.128).
            </p>
          </div>

          <div className="chart-container">
            <img 
            src={`${process.env.PUBLIC_URL}/WR_Age_vs_Fantasy_Points.png`}
            alt="WR Age vs Fantasy Points" 
            style={{width: '100%', maxWidth: '700px'}} />
            <p className="caption">
              <strong>Figure 9:</strong> WR Age vs Average Fantasy Points. Wide receivers exhibit extreme volatility 
              with dramatic swings between adjacent ages, resulting in negligible correlation.
            </p>
          </div>

          <h3>Polynomial Regression</h3>
          <p>
            Because we couldn't determine any strong linear relationships in the data, we tested to see if a non-linear model may capture more variance. After fitting the polynomial regression model to look at the effects of age on fantasy points, it is clear that there is almost no 
            relationship between the two categories given the line is almost flat with a slight curve. Also, looking that the r^2 score, it had a 
            0.0126 which means that the model explains about 1% of the variation in fantasy points.
          </p>

        <div className="code-block">
            <pre>
              <code>
{`df = pd.read_csv("offensive_per_player_summary.csv")

X = df[['age_mean']]
y = df['fantasy_points_ppr_mean']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

model = make_pipeline(PolynomialFeatures(degree=2), LinearRegression())
model.fit(X_train_scaled, y_train)

y_predict = model.predict(X_test_scaled)

mse = mean_squared_error(y_test, y_predict)
r2 = r2_score(y_test, y_predict)
print(f"Polynomail Regression MSE and r^2: {mse}, {r2}")


plt.figure(figsize=(8,6))
sns.scatterplot(x='age_mean', y='fantasy_points_ppr_mean', data=df, label='Actual')
sns.lineplot(x=X_test['age_mean'], y=y_predict, color='red', label='Predicted')
plt.title('Fantasy Points vs Age')
plt.xlabel('Age')
plt.ylabel('Fantasy Points')
plt.legend()
plt.show()
`}
              </code>
            </pre>
          </div>

          <div className="chart-container">
            <img 
            src={`${process.env.PUBLIC_URL}/Fantasy_Points_vs_Age_predicted_vs_actual.png`}
            alt="Predicted vs Actual" 
            style={{width: '100%', maxWidth: '700px'}} />
            <p className="caption">
              <strong>Figure 10:</strong> Polynomial Regression - Fantasy Points vs Age. The nearly flat regression line 
              with R² = 0.0126 indicates age explains only 1% of fantasy point variance.
            </p>
          </div>

          <div className="results-box">
            <p><strong>Polynomial Regression Performance:</strong></p>
            <ul>
              <li><strong>R² Score:</strong> 0.0126 (explains only 1% of variance)</li>
              <li><strong>MSE:</strong> 2407.393053726313</li>
            </ul>
            <p>
              The near-zero R² confirms that age alone is insufficient for predicting fantasy performance.
            </p>
          </div>
        </section>

        <hr />
        {/* Machine Learning Models Section */}
        <section id="ml-models">
          <h2>Machine Learning Models</h2>
          <h4>Having explored the foundational patterns in the data through our analysis, we then moved to machine learning methods to better quantify our observations. We seek to find relations in the data and evaluate how well the statistical models can capture them. The following section applies supervised and unsupervised learning techniques to gain more insight into the qualities we found in our primary analysis.</h4>
          <h3>Random Forest Regression</h3>
          <p>
            <strong>Reasoning:</strong> Since both linear and polynomial models performed poorly, we decided to see if a more flexible model might perform better. Random Forest was chosen because it handles non-linear relationships well. 
            Since Pearson correlation showed weak linear relationships, we tested whether non-linear modeling 
            could better capture age-performance patterns.
          </p>

        <div className="code-block">
            <pre>
              <code>
{`def random_forest():
  df = pd.read_csv("CleanedOffensive.csv")
  x = df[["age", "position"]]
  y = df["fantasy_points_ppr"]
  numeric_features = ["age"]
  categorical_features = ["position"]

  processed = ColumnTransformer(
      transformers=[
          ("categorical", OneHotEncoder(drop="first"), ["position"])
      ],
      remainder="passthrough"
  )

  rf_model = RandomForestRegressor(
      n_estimators=300,
      random_state=42,
      n_jobs=-1
  )

  rf_pipeline = Pipeline(steps=[
    ("preprocess", processed),
    ("model", rf_model)
  ])


  x_train, x_test, y_train, y_test = train_test_split(
      x, y, test_size=0.2, random_state=42
  )

  rf_pipeline.fit(x_train, y_train)
  y_pred = rf_pipeline.predict(x_test)

  r2 = r2_score(y_test, y_pred)
  rmse = np.sqrt(mean_squared_error(y_test, y_pred))
  mae = mean_absolute_error(y_test, y_pred)

  feature_names = (
    list(rf_pipeline.named_steps["preprocess"]
         .named_transformers_["categorical"]
         .get_feature_names_out(["position"]))
    + ["age"]
  )

  print("Random Forest Regression Results:")
  print(f"R² Score: {r2}")
  print(f"Random Mean Squared Error: {rmse}")
  print(f"Mean Absolute Error: {mae}")

random_forest()`}
              </code>
            </pre>
          </div>
          
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
            <strong>Reasoning:</strong> Finally, rather tahn trying to outright predict fantasy points, we used clustering to see if any natural groups might form and whether these clusters align with performance differences. Clustering analysis was used to identify natural groupings in the data 
            based on age and position, and to examine if distinct player archetypes emerge.
          </p>

          <div className="code-block">
            <pre>
              <code>
{`def kmeans_clustering():
  df = pd.read_csv("CleanedOffensive.csv")
  x = df[["age", "position"]]
  preprocess = ColumnTransformer(transformers=[("cat", OneHotEncoder(drop="first"), ["position"]), ("num", StandardScaler(), ["age"])])
  kmeans = KMeans(n_clusters=5, random_state=1)
  pipeline = Pipeline(steps=[("preprocess", preprocess), ("model", kmeans)])
  pipeline.fit(x)
  df["cluster"] = pipeline.predict(x)

  X_processed = pipeline.named_steps["preprocess"].transform(x)
  sil_score = silhouette_score(X_processed, df["cluster"])
  print("===KMeans Clustering Results===")
  print(f"Silhouette Score: {sil_score}")

  position_summary = df.groupby(["cluster", "position"]).size().unstack(fill_value=0)
  print("\n---Cluster composition by position---")
  print(position_summary)

  age_summary  = df.groupby("cluster")[["age"]].mean()
  print("\n---Cluster average age---")
  print(age_summary)

  cluster_summary = df.groupby("cluster")[["fantasy_points_ppr"]].mean()
  print("\n---Cluster average fantasy points---")
  print(cluster_summary)

kmeans_clustering()`}
              </code>
            </pre>
          </div>

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
            We used K Means clustering to determine if the data forms any clusters based on age and position, 
            and to see if whether there are any meaningful difference in fantasy points between clusters. After standardizing the ages and one-hot 
            encoding the positions, the model, trained to create five clusters, got a silhouette score of 0.526. This score means that there is moderately strong 
            clustering in the data. The five clusters that were created seemed to be split in the following way: young WR, old WR, young TE, older veteran 
            players in both positions, and old TE. From the point averages, we can see that both WR groups and the veterans group had pretty high average 
            points (73-84), while the TE clusters' averages were lower (47-59). This would seem to indicate that WRs generally score more than TEs, but that 
            the positional differences become less pronounced in much older players, as seen with the veteran/mixed cluster.
          </p>
        </section>

        <hr />
        {/* Visualization Section */}
        <section id="visualization">
          <h2>Key Visualizations Summary</h2>
          <p>
            As shown by all the diagrams so far, there is negligible correlation between age and fantasy points.
            For instance, even though there are slight correlations between fantasy points and age in figure 4's
            cat and whisker plot, there is no clear up or downward trends in figure 5, and the r correlation of
            pearson correlation further reinforces that with their low value. Similarly, this trend of no clear
            correlation, or if there is even one it is negligible, is shown in all graphs so far.
          </p>
          
          <h3>Distribution Patterns</h3>
          <p>
            As shown in the visualization summary, the distribution patterns of the graphs aren't entirely clear.
            For instance in figure 5, the fantasy points decrease as one ages towards 22.5 from 20, but then increases
            again and then has random drops, and so on. This therefore means that there is no straightforward distribution
            pattern. It is for this reason why the r^2 correlation score for pearson correlation is so low, because
            there is a very lacking linear trend. Therefore, providing the basis of the conclusion that there is no
            correlation between age and fantasy points, and that there are more variables, which may
            impact it more.
          </p>

          <h3>Position Differences</h3>
          <p>
            There doesn't seem to be much apparent differences between the performance of age vs fantasy points for
            TE and WR as shown in figure 2 and 3. The only difference which may be there is the fact that WRs seem to have a higher point scaling
            which could be due to other counfounding factors. However, in terms of how they trend as age increases
            is the same. Concurrently, in examining them in figure 7 and 8, it shows that there is still no real correlation
            as the line graphs seem to go up and down sporadically. Hence further supporting the claim that there is no
            real trend between fantasy points and age even between positions.
          </p>
        </section>

        <hr />
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
            The minimal predictive power of age (r = 0.055, R² = 0.0126) can be
            explained by confounding variables that dominate fantasy
            performance.
            <strong>Playing time</strong> is the most critical factor: a
            35-year-old receiver with 150 targets will outscore a 25-year-old
            with 30 targets regardless of age-related efficiency changes.{" "}
            <strong>Team quality, offensive scheme, and coaching</strong>{" "}
            heavily influence production, as players in pass-heavy offenses
            generate more fantasy points than those in run-first systems.{" "}
            <strong>Injury history</strong> introduces significant variability,
            and <strong>talent level</strong> varies dramatically across
            players, with elite talent sustaining high performance well into a
            player's 30s. These factors interact in complex ways, explaining why
            age alone explains only 1% of fantasy point variance.
          </p>
          <p>
            For <strong>fantasy football managers</strong>, these findings show
            that when evaluating players in the 22-35 age range, managers should
            prioritize <strong>opportunity and role</strong> over age. A
            33-year-old receiver who is his team's clear WR1 represents a better
            fantasy asset than a 24-year-old buried on the depth chart. Managers
            should focus on target share, snap percentage, and red-zone usage
            rather than age-based assumptions. The data shows players can
            maintain elite production well into their early 30s, with dramatic
            drop-off typically occurring only after age 37. Age should be a
            secondary consideration, used primarily to identify decline risks
            for players over 35.
          </p>
          <p>
            The <strong>K-Means clustering analysis</strong> revealed that
            natural player archetypes exist, but they are more strongly defined
            by <strong>position and career stage</strong> than by age alone. The
            clustering identified five distinct groups: Young WR (avg age 23.97,
            73.4 PPR points), Prime WR (avg age 28.45, 84.9 PPR points), Young
            TE (avg age 24.21, 47.1 PPR points), Veteran Mixed (avg age 33.38,
            72.7 PPR points), and Older TE (avg age 28.56, 59.4 PPR points).
            These clusters demonstrate that{" "}
            <strong>position matters more than age</strong>: WRs consistently
            outscore TEs across all age groups, with Prime WRs averaging 84.9
            points compared to Older TEs at 59.4 points despite similar average
            ages. The Veteran Mixed cluster shows players averaging 33.38 years
            old still producing 72.7 PPR points, comparable to Young WRs. This
            suggests that{" "}
            <strong>age alone doesn't determine fantasy value</strong>; instead,
            the combination of position, opportunity, talent, and role creates
            distinct player archetypes.
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
        
        <hr />
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
