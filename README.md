# rails5-react-redux-todo

This is a todo app using react and redux.

### Get started

```
$ bundle install
$ rake db:migrate
$ yarn install
$ bin/webpack
$ rails s
```

Then, open your browser and navigate to `http://localhost:3000`

### How to run on Heroku

```
$ heroku create
$ heroku addons:create heroku-postgresql:hobby-dev
$ heroku buildpacks:add --index 1 heroku/nodejs
$ heroku buildpacks:add --index 2 heroku/ruby
$ git push heroku master
$ heroku run rake db:migrate
$ heroku open
```
