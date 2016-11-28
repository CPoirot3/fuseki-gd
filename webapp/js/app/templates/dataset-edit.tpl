<div class="row">
  <div class="col-md-4">
    <div class="bordered-box">
      <span class="pull-right">
        <button class="btn btn-sm btn-info action list-graphs">当前图列表</button>
      </span>
      <h3>可用图</h3>

      <% if (countPerformed()) { %>
        <ul class="nav nav-pills nav-stacked graphs">
          <% _.each( counts(), function( n, g ) { %>
            <li class="">
              <a href="#" class="select-dataset" data-graph-name="<%= g %>" data-graph-size="<%= n %>">
                <%= g %> (<%= n %> triples)
              </a>
            </li>
          <% } ); %>
        </ul>
      <% } else { %>
        <p class="text-muted text-sm">列出当前图</p>
      <% } %>
    </div> <!-- /.bordered-box -->
  </div> <!-- /.col-md-4 -->

  <div class="col-md-8">
    <div class="row">
      <div class="col-md-12">
        <div class="form-group">
          <div class="input-group">
            <div class="input-group-addon">图:</div>
            <input class="form-control graph-name" type="text" placeholder="">
          </div>
        </div>
      </div>
    </div> <!-- /.row -->

    <div class="row">
      <div class="col-md-12">
        <div id="graph-editor" class="bordered-box"></div>
      </div>
    </div> <!-- /.row -->

    <div class="row">
      <div class="col-md-12">
        <p class="feedback"></p>
      </div>
    </div> <!-- /.row -->

    <div class="row">
      <div class="col-md-12">
        <span class="pull-right">
          <button class="btn btn-default action cancel-edit"><i class="fa fa-times"></i>丢弃修改 </button>
          <button class="btn btn-info action save-edit"><i class="fa fa-check"></i> 保存</button>
        </span>
      </div>
    </div> <!-- /.row -->
  </div> <!-- /.col-md-8 -->
</div>
