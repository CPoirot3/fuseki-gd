<h2>可用服务</h2>

<dl class="dl-horizontal">
  <% _.each( servicesDescription(), function( serviceDescription ) { %>
    <dt>
      <%= serviceDescription.label %>:
    </dt>
    <dd>
      <a href="<%= serviceDescription.url %>"><%= serviceDescription.url %></a>
    </dd>
  <% } ); %>
</dl>

<h2>统计</h2>
<div id="statistics"></div>

<h2>数据集大小</h2>
<p>
<strong>注意</strong> 加载大数据集时可能会比较慢 :
<button href="#" class="action count-graphs btn btn-primary">所有图里的三元组总数</button>
</p>
<% if (countPerformed()) { %>
<dl class="dl-horizontal">
  <dt><span class="heading">图名:</span></dt><dd><span class="heading">三元组:</span></dd>
  <% _.each( counts(), function( n, g ) { %>
    <dt class="font-weight-normal">
      <%= g %>
    </dt>
    <dd>
      <div class="numeric"><%= n %></div>
    </dd>
  <% } ); %>
</dl>

<% } %>

<h2>将要发生的操作</h2>

<p><em>TBD. 将会列出任何正执行或者最近执行完的执行时间长的操作,
e.g. 备份.</em></p>
