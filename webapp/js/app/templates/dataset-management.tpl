<% if (datasets.length === 0) { %>
  <p>还有没创建数据集.
    <a class="btn btn-sm btn-primary" href="?tab=new-dataset">创建</a>
  </p>
<% } else { %>
  <div class="row">
    <div class="col-md-12">
      <table class='table'>
        <tr class="headings">
          <th>Name</th>
          <!-- JENA-867 <th>Active?</th> -->
          <th></th>
        </tr>
        <% _.each( datasets, function( ds ) { %>
          <tr>
            <td>
              <%= ds.name() %>
            </td>
            <!-- JENA-867 temporarily disable non-functional checkbox
            <td>
              <input type='checkbox' class='checkbox' checked />
            </td>
            -->
            <td>
              <div>
                <!-- JENA-869 Disable download button until it works again -->
                <a class="btn btn-sm action remove btn-primary" data-ds-id='<%= ds.name() %>'><i class='fa fa-times-circle'></i> 移除</a>
                <a class="btn btn-sm action backup btn-primary" data-ds-id='<%= ds.name() %>'><i class='fa fa-download'></i> 备份</a>
                <a class="btn btn-sm action add-data btn-primary" href="dataset.html?tab=upload&ds=<%= ds.name() %>"><i class='fa fa-upload'></i> 上传数据</a>
              </div>
              <div class="action feedback"></a>
            </td>
          </tr>
        <% }) %>

      </table>
    </div>
  </div>
<% } %>

<!-- Modal dialogs -->

<div class="modal fade" id="actionConfirmModal" tabindex="-1" role="dialog" aria-labelledby="actionConfirmModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        <h4 class="modal-title" id="actionConfirmModalLabel">确认</h4>
      </div>
      <div class="modal-body">
        <p></p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-icon-remove"></i> 取消</button>
        <button type="button" class="btn btn-primary action confirm">
          <i class="fa fa-icon-confirm"></i>
          确认 <span class="action-label">操作</span>
        </button>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->
