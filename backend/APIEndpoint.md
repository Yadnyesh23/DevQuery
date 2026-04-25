# 📌 API List

---

### 1. Search Documents

**Endpoint:** `GET /search`  
**Purpose:** Main search endpoint to fetch documents ***Elastic Search***

**Query Parameters:**

| Parameter | Description |
|-----------|-------------|
| `q` | Search query |
| `page` | Page number (pagination) |
| `limit` | Number of results per page |

**Example:**

```http
GET /search?q=nodejs_caching&page=2&limit=10

```
```
Response:-
{
  "results": [
    {
      "id": "abc123",
      "title": "Node.js caching strategies",
      "snippet": "Use Redis to cache API responses...",
      "tags": ["node", "redis"],
      "createdAt": "2026-04-20"
    }
  ],
  "total": 120,
  "page": 2,
  "limit": 10
}
```

---

### 2. Autocomplete

**Endpoint:** `GET /search/autocomplete`  
**Purpose:** Provide real-time suggestions while typing.(fast, usually from ***Redis***)

**Query Parameters:**

| Parameter | Description |
|-----------|-------------|
| `q` | Partial search query |

**Example:**

```http
GET /search/autocomplete?q=nod
```
```
Response:-
[
  "node js",
  "nodejs caching",
  "node event loop"
]
```

**Sample Response:**

```json
[
  "node js",
  "nodejs caching",
  "node event loop"
]
```

---

### 3. Search Suggestions (Related Queries)

**Endpoint:** `GET /search/suggestions`  
**Purpose:** Show related queries ("People also searched").

**Query Parameters:**

| Parameter | Description |
|-----------|-------------|
| `q` | Search query |

**Example:**

```http
GET /search/suggestions?q=redis caching
```

**Sample Response:**

```json
[
  "redis vs memcached",
  "redis performance tuning",
  "caching strategies"
]
```

### 4.Get Full Document
**Endpoint :-**  `GET /documents/:id`

**Purpose :**  Fetch full content

**Example :**
```
GET /documents/abc123
```
```
Response :
{
  "id": "abc123",
  "title": "Node.js caching strategies",
  "content": "Full Reddit discussion...",
  "author": "user123",
  "tags": ["node", "redis"],
  "createdAt": "2026-04-20"
}
```

### 5.Ingestion API (INTERNAL)
**Endpoint :-** `POST /ingest/reddit`

**Purpose :-** 

Fetch data from Reddit

Store + index it