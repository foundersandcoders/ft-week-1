# Quiz API

The Quiz API is a TypeScript-based web service designed to provide access to a collection of trivia questions. This service allows API consumers to:
- Fetch randomly selected quiz questions.
- Retrieve questions filtered by category or difficulty level.
- Toggle the 'favourite' status of individual questions.

The API uses a simulated JSON-based database, which makes it an excellent tool for educational purposes and coding bootcamps.

## API Endpoints

### Get Random Quiz Questions

Retrieve a randomized list of quiz questions.

- **URL**: `/api/questions/random`
- **Method**: `GET`
- **Query Parameters**:
  - `count` (optional): The number of random questions to return (default: 5).
- **Response Structure**: An array of `QuestionType` objects.

### Get Questions by Category

Fetch quiz questions filtered by a specific category.

- **URL**: `/api/questions/category`
- **Method**: `GET`
- **Query Parameters**:
  - `category` (required): The category of questions to fetch.
  - `count` (optional): The number of questions to return (default: 5).
- **Response Structure**: An array of `QuestionType` objects matching the specified category.

### Get Questions by Difficulty

Fetch quiz questions filtered by difficulty level.

- **URL**: `/api/questions/difficulty`
- **Method**: `GET`
- **Query Parameters**:
  - `difficulty` (required): The difficulty level (`easy`, `medium`, `hard`) of questions to fetch.
  - `count` (optional): The number of questions to return (default: 5).
- **Response Structure**: An array of `QuestionType` objects matching the specified difficulty.

### Toggle Favourite Status of a Question

Change the 'favourite' status of a particular question identified by its `id`.

- **URL**: `/api/questions/:id/favourite`
- **Method**: `PATCH`
- **URL Parameters**:
  - `id` (required): The unique identifier of the question.
- **Response Structure**: A confirmation message indicating the new status.

## Data Types

The API uses the following TypeScript types to ensure a consistent data interface:

### `QuestionType`

Represents the structure of an individual quiz question.

- `id` (number): Unique identifier for the question.
- `category` (string): The category this question belongs to (e.g., "Science", "Geography").
- `difficulty` (string): Difficulty level of the question. It can be "easy", "medium", or "hard".
- `question` (string): The actual trivia question.
- `options` (array of strings): Different answer choices.
- `answer` (string): The correct answer to the question.
- `favourited` (boolean): Indicates whether the question has been marked as favourite.
- `timestamp` (string): ISO 8601 formatted date and time indicating when the question was added.

### `DataType`

Defines the structure of the data source used by the API.

- `questions` (array of `QuestionType`): A list of all quiz questions available.

## Setup and Execution

To install dependencies and run the Quiz API on your local machine, execute the following commands:

```bash
npm install
npm run dev
