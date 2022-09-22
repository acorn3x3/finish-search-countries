const SUPABASE_URL = 'https://yyafrnrhvbvehifltlkl.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5YWZybnJodmJ2ZWhpZmx0bGtsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTU5NDA2NDEsImV4cCI6MTk3MTUxNjY0MX0.xMaK7QxF8ut26HwnOeZONCj9728N9XXm0bIknwpAUtg';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getCountries(name, continent) {
    // > Part D: Add a second argument to `select(` to
    // return an exact db count of matching records

    // > Part A: Implement the client query from countries:
    //   1. select all columns
    //   2. order by country name
    //   3. limit to 100 countries

    let query = client.from('countries').select('*', { count: 'exact' }).limit(100).order('name');

    if (name) {
        query = query.ilike('name', `%${name}%`);
        // > Part C: add query for name
    }

    if (continent) {
        query = query.eq('continent', continent);
        // > Part C: add query for continent
    }

    // > Part A: `await` the query and return the response
    const response = await query;
    return response;
}

export async function getContinents() {
    let query = client.from('country_continents').select('*');
    const response = await query;

    return response;
    // > Part B: await client query from country_continents
    // (select all columns) and return response
}
