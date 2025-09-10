# fakeapi

A fake fetch function that works with custom data. Which you can replace with your live api.

# Example 1

Javascript:

```
fakeapi('./books')
    .then((resp)=>{
        return resp.json();
    })
    .then((data)=>{
        console.log(data);
    })
    .catch((erro)=>{
        console.log(erro);
    })
```

Output:

```
    {title: 'Pride and Prejudice', author: 'Jane Austen', release_date: '1813-01-28'},
    {title: 'To Kill a Mockingbird', author: 'Harper Lee', release_date: '1960-07-11'},
    {title: 'The Hobbit', author: 'J.R.R. Tolkien', release_data: '1937-09-21'},
```

# Example 2

Javascript:

```
fakeapi('./books/1')
    .then((resp)=>{
        return resp.json();
    })
    .then((data)=>{
        console.log(data);
    })
    .catch((erro)=>{
        console.log(erro);
    })
```

Output:

```
    {title: 'To Kill a Mockingbird', author: 'Harper Lee', release_date: '1960-07-11'},
```

# Example 3

Javascript:

```
fakeapi('./books/6')
    .then((resp)=>{
        return resp.json();
    })
    .then((data)=>{
        console.log(data);
    })
    .catch((erro)=>{
        console.log(erro.message);
    })
```

Output:

```
    'UNKNOWN REQUEST'
```
