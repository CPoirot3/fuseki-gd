<div class="row">
  <div class="col-md-12">
      <div class="" id="simple-edit">
        <form class="form-horizontal" role="form">
          <div class="form-group">
            <label for="datasetName" class="col-sm-2 control-label">数据集名</label>
            <div class="col-sm-10">
              <div class="validation-warning dbNameValidation">名字</div>
              <input type="text" class="form-control" name="dbName" placeholder="dataset name" />
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">数据集类型</label>
            <div class="col-sm-10">
              <div class="radio">
                <label>
                  <input type="radio" name="dbType" value="mem" checked>
                  内存模式 &ndash; 服务器重启时数据集将会重新创建，但内容会丢失
                </label>
              </div>
              <div class="radio">
                <label>
                  <input type="radio" name="dbType" value="tdb">
                  持久化模式 &ndash; 数据集会保存
                </label>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="errorOutput bg-warning"></div>
            </div>
          </div>

          <div class="row controls">
            <div class="col-md-3 col-md-offset-9">
              <a href="#" class="btn btn-sm btn-primary action commit simple"><i class="fa fa-check"></i> 创建数据集</a>
            </div>
          </div>
        </form>
      </div>

      <!--
      <div class="tab-pane" id="upload">
        <p>&nbsp;</p>
        <div class="row">
          <p class="col-sm-12">If you have a Fuseki config file (i.e. a Jena assembler description),
          you can upload it here:</p>
        </div>
        <div class="row controls">
          <form id="uploadForm" method="post" action="$/datasets" class="form-horizontal col-sm-12">
            <div class="form-group">
              <label for="assemblerFile" class="col-sm-2 control-label">配置文件</label>
              <div class="col-sm-10">
                <div class="validation-warning assemblerFileValidation">名字</div>
                <input type="file" class="form-control" name="assemblerFile" />
              </div>
            </div>
          </form>
        </div>

        <div class="row">
          <div class="errorOutput col-sm-12"></div>
        </div>

        <div class="row">
          <div class="col-sm-12">
            <a href="admin-data-management.html" class="btn btn-sm btn-default"><i class="fa fa-mail-reply"></i> 取消</a>
            <a href="#" class="btn btn-sm btn-primary action upload"><i class="fa fa-upload"></i> 上传配置文件</a>
          </div>
        </div>
      </div>
      -->

  </div><!-- /.col-md-12 -->
</div><!-- /.row -->


