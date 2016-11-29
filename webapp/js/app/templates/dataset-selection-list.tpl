<div class="col-md-span-12">
  <% if (datasets.length > 0) { %>
    <table class='table ijd'>
      <tr class="headings"><th>数据集名</th><th>操作</th></tr>
      <% _.each( datasets, function( ds ) { %>
        <tr>
          <td>
            <%= ds.name() %>
          </td>
          <td>
            <a class="btn btn-sm action remove btn-primary" href="dataset.html?tab=query&ds=<%= ds.name() %>"><i class='fa fa-question-circle'></i> 查询</a>
            <a class="btn btn-sm action remove btn-primary" href="dataset.html?tab=upload&ds=<%= ds.name() %>"><i class='fa fa-upload'></i> 上传数据</a>
            <a class="btn btn-sm action configure btn-primary" href="dataset.html?tab=info&ds=<%= ds.name() %>"><i class='fa fa-dashboard'></i> 信息</a>
          </td>
        </tr>
      <% }) %>

    </table>
   <% } else { %>
    <p>还未创建数据集. <a href="manage.html?tab=new-dataset">加入一个.</a></p>
   <% } %>
</div>
