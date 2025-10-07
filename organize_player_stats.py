import pandas as pd
import numpy as np

def organize_player_stats():
    """
    Organize defensive and offensive player stats by position and player.
    Creates separate DataFrames for defensive and offensive stats, 
    organized by position (e.g., all QB stats first, then WR stats, etc.)
    Within each position, players are sorted alphabetically with all their seasons
    appearing consecutively (e.g., all of Darius Slay's seasons together in CB group)
    """
    
   
    defense_df = pd.read_csv('yearly_player_stats_defense.csv')
    offense_df = pd.read_csv('yearly_player_stats_offense.csv')
    
    # Get unique positions
    defense_positions = defense_df['position'].unique()
    offense_positions = offense_df['position'].unique()
    
    # Define position order for defensive players
    defense_position_order = [
        'DE', 'DT', 'NT',  
        'OLB', 'ILB', 'LB',  
        'CB',  
        'FS', 'SS', 'S',  
        'P', 'K',  
        'N/A'  
    ]
    
    # Define position order for offensive players
    offense_position_order = [
        'QB',  
        'RB', 'FB',  
        'WR',  
        'TE',  
        'OL', 'OT', 'OG', 'C',  
        'P', 'K',  
        'N/A'  
    ]
    
    # Create organized defensive DataFrame
    defense_organized = []
    
    for position in defense_position_order:
        if position in defense_positions:
            position_data = defense_df[defense_df['position'] == position].copy()
            if len(position_data) > 0:
                defense_organized.append(position_data)
    
   
    remaining_defense_positions = set(defense_positions) - set(defense_position_order)
    remaining_defense_positions = [pos for pos in remaining_defense_positions if pd.notna(pos)]
    for position in sorted(remaining_defense_positions):
        position_data = defense_df[defense_df['position'] == position].copy()
        if len(position_data) > 0:
            defense_organized.append(position_data)
    
    # Combine defensive data
    if defense_organized:
        defense_organized_df = pd.concat(defense_organized, ignore_index=True)
    else:
        defense_organized_df = defense_df.copy()
    
    # Create organized offensive DataFrame
    offense_organized = []
    
    for position in offense_position_order:
        if position in offense_positions:
            position_data = offense_df[offense_df['position'] == position].copy()
            if len(position_data) > 0:
                offense_organized.append(position_data)
    
    # Handle remaining offensive positions
    remaining_offense_positions = set(offense_positions) - set(offense_position_order)
    remaining_offense_positions = [pos for pos in remaining_offense_positions if pd.notna(pos)]
    for position in sorted(remaining_offense_positions):
        position_data = offense_df[offense_df['position'] == position].copy()
        if len(position_data) > 0:
            offense_organized.append(position_data)
    
    # Combine offensive data
    if offense_organized:
        offense_organized_df = pd.concat(offense_organized, ignore_index=True)
    else:
        offense_organized_df = offense_df.copy()
    
    # Data type conversion
    numeric_columns_defense = defense_organized_df.select_dtypes(include=[np.number]).columns
    for col in numeric_columns_defense:
        defense_organized_df[col] = pd.to_numeric(defense_organized_df[col], errors='coerce')
    
    numeric_columns_offense = offense_organized_df.select_dtypes(include=[np.number]).columns
    for col in numeric_columns_offense:
        offense_organized_df[col] = pd.to_numeric(offense_organized_df[col], errors='coerce')
    
    # Convert string columns
    string_columns = ['player_id', 'player_name', 'position', 'college', 'team', 'conference', 'division']
    for col in string_columns:
        if col in defense_organized_df.columns:
            defense_organized_df[col] = defense_organized_df[col].astype(str)
        if col in offense_organized_df.columns:
            offense_organized_df[col] = offense_organized_df[col].astype(str)
    
    # Convert season to integer
    if 'season' in defense_organized_df.columns:
        defense_organized_df['season'] = pd.to_numeric(defense_organized_df['season'], errors='coerce').astype('Int64')
    if 'season' in offense_organized_df.columns:
        offense_organized_df['season'] = pd.to_numeric(offense_organized_df['season'], errors='coerce').astype('Int64')
    
    # Sort by position, then by player name alphabetically, then by season
    if 'season' in defense_organized_df.columns and 'player_name' in defense_organized_df.columns:
        defense_organized_df = defense_organized_df.sort_values(['position', 'player_name', 'season'])
    
    if 'season' in offense_organized_df.columns and 'player_name' in offense_organized_df.columns:
        offense_organized_df = offense_organized_df.sort_values(['position', 'player_name', 'season'])
 
    defense_organized_df.to_csv('defense_stats_organized.csv', index=False)
    offense_organized_df.to_csv('offense_stats_organized.csv', index=False)
    
    return defense_organized_df, offense_organized_df

if __name__ == "__main__":
    defense_df, offense_df = organize_player_stats()