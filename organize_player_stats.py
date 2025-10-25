import pandas as pd
import numpy as np

def organize_player_stats():
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
    
    return cleaned_df

if __name__ == "__main__":
    cleaned_df = organize_player_stats()