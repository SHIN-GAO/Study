<html>
  <head>
    <title>Movie List</title>
  </head>
  <body>
    <ul>
      {% for item in list %}
        <li class="item">
          <p href="{{ item.id }}">{{ item.name }}</p>
        </li>
      {% endfor %}
    </ul>
  </body>
</html>
<script src="/public/js/news.js"></script>