<div class="row file-description">
  <div class="col-sm-3">
    <%= file.name %>
  </div>
  <div class="col-sm-3">
    <em>
      <%= file.readableFileSize %>
    </em>
  </div>
  <div class="col-sm-6">
    <button class="btn btn-sm btn-default action action-upload-file"><i class="fa fa-upload"></i> 上传</button>
    <button class="btn btn-sm btn-default action action-remove-upload"><i class="fa fa-minus-circle"></i> 移除</button>
  </div>
  <div class="col-sm-12">
    <div class="result"></div>
  </div>
  <div class="col-sm-12">
    <div class="progress">
      <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
  </div>

</div>
