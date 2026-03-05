import os
import json
import urllib.request
import urllib.parse
from urllib.error import URLError, HTTPError
from typing import Optional, Dict, Any

def fetch_recent_mentions(query: str) -> Optional[Dict[str, Any]]:
    """
    Fetches recent mentions (tweets) for a given search query using the Twitter/X API v2.
    
    Args:
        query (str): The search query to look up recent mentions.
        
    Returns:
        Optional[Dict[str, Any]]: A dictionary containing the JSON response from the API, 
                                  or None if an error occurred.
    """
    bearer_token = os.environ.get("TWITTER_BEARER_TOKEN")
    if not bearer_token:
        print("Error: TWITTER_BEARER_TOKEN environment variable is not set.")
        return None

    # Base URL for the recent search endpoint
    # Twitter API v2 recent search endpoint
    base_url = "https://api.twitter.com/2/tweets/search/recent"
    
    # Construct query parameters
    params = {
        "query": query,
        "max_results": 10,
        "tweet.fields": "created_at,author_id,public_metrics"
    }
    
    query_string = urllib.parse.urlencode(params)
    url = f"{base_url}?{query_string}"
    
    headers = {
        "Authorization": f"Bearer {bearer_token}",
        "Content-Type": "application/json"
    }
    
    req = urllib.request.Request(url, headers=headers)
    
    try:
        with urllib.request.urlopen(req) as response:
            if response.status == 200:
                body = response.read()
                data = json.loads(body.decode("utf-8"))
                return data
            else:
                print(f"Error: Received unexpected status code {response.status}")
                return None
    except HTTPError as e:
        print(f"HTTP Error: {e.code} - {e.reason}")
        try:
            error_body = e.read().decode("utf-8")
            print(f"Response body: {error_body}")
        except Exception:
            pass
        return None
    except URLError as e:
        print(f"URL Error: Failed to reach a server. Reason: {e.reason}")
        return None
    except json.JSONDecodeError as e:
        print(f"JSON Decode Error: Failed to parse the response. Reason: {e}")
        return None
    except Exception as e:
        print(f"An unexpected error occurred: {e}")
        return None

if __name__ == "__main__":
    # Simple test case if run directly
    sample_query = "Advoloom"
    print(f"Fetching recent mentions for '{sample_query}'...")
    result = fetch_recent_mentions(sample_query)
    if result:
        print(json.dumps(result, indent=2))
