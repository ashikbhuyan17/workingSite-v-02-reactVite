import React from 'react';
import '../../styles/employee.css';
import { Catalogues } from '../../util/mock';
const Employee = () => {
  return (
    <>
      <div class="container-fluid">
        <div class=" table-responsive card shadow fix">
          <div class="table-wrapper">
            <div class="table-title">
              <div class="row">
                <div class="col-xs-6">
                  <h2>
                    Manage <b></b>
                  </h2>
                </div>
                <div class="col-xs-6">
                  <a
                    href="#addEmployeeModal"
                    class="btn btn-success"
                    data-toggle="modal"
                  >
                    <i class="material-icons">&#xE147;</i>{' '}
                    <span>Add New Employee</span>
                  </a>
                  <a
                    href="#deleteEmployeeModal"
                    class="btn btn-danger"
                    data-toggle="modal"
                  >
                    <i class="material-icons">&#xE15C;</i> <span>Delete</span>
                  </a>
                </div>
              </div>
            </div>
            <table class="table table-striped table-hover table-responsive container-fluid">
              <thead>
                <tr>
                  <th>
                    <span class="custom-checkbox">
                      <input type="checkbox" id="selectAll" />
                      <label for="selectAll"></label>
                    </span>
                  </th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Phone</th>
                  <th>action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span class="custom-checkbox">
                      <input
                        type="checkbox"
                        id="checkbox1"
                        name="options[]"
                        value="1"
                        onChange={(e) => {
                          console.log(e.target.checked);
                        }}
                      />
                      <label for="checkbox1"></label>
                    </span>
                  </td>
                  <td>Thomas Hardy</td>
                  <td>thomashardy@mail.com</td>
                  <td>89 Chiaroscuro Rd, Portland, USA</td>
                  <td>(171) 555-2222</td>
                  <td>
                    <a
                      href="#editEmployeeModal"
                      class="edit"
                      data-toggle="modal"
                    >
                      <i
                        class="material-icons"
                        data-toggle="tooltip"
                        title="Edit"
                      >
                        &#xE254;
                      </i>
                    </a>
                    <a
                      href="#deleteEmployeeModal"
                      class="delete"
                      data-toggle="modal"
                    >
                      <i
                        class="material-icons"
                        data-toggle="tooltip"
                        title="Delete"
                      >
                        &#xE872;
                      </i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span class="custom-checkbox">
                      <input
                        type="checkbox"
                        id="checkbox2"
                        name="options[]"
                        value="1"
                      />
                      <label for="checkbox2"></label>
                    </span>
                  </td>
                  <td>Dominique Perrier</td>
                  <td>dominiqueperrier@mail.com</td>
                  <td>Obere Str. 57, Berlin, Germany</td>
                  <td>(313) 555-5735</td>
                  <td>
                    <a
                      href="#editEmployeeModal"
                      class="edit"
                      data-toggle="modal"
                    >
                      <i
                        class="material-icons"
                        data-toggle="tooltip"
                        title="Edit"
                      >
                        &#xE254;
                      </i>
                    </a>
                    <a
                      href="#deleteEmployeeModal"
                      class="delete"
                      data-toggle="modal"
                    >
                      <i
                        class="material-icons"
                        data-toggle="tooltip"
                        title="Delete"
                      >
                        &#xE872;
                      </i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="clearfix">
              <div class="hint-text">
                Showing <b>5</b> out of <b>25</b> entries
              </div>
              <ul class="pagination">
                <li class="page-item disabled">
                  <a href="#">Previous</a>
                </li>
                <li class="page-item">
                  <a href="#" class="page-link">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a href="#" class="page-link">
                    2
                  </a>
                </li>
                <li class="page-item active">
                  <a href="#" class="page-link">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a href="#" class="page-link">
                    4
                  </a>
                </li>
                <li class="page-item">
                  <a href="#" class="page-link">
                    5
                  </a>
                </li>
                <li class="page-item">
                  <a href="#" class="page-link">
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div id="addEmployeeModal" class="modal fade">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Add Employee</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                &times;
              </button>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control" required />
              </div>
              <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control" required />
              </div>
              <div class="form-group">
                <label>Address</label>
                <textarea class="form-control" required></textarea>
              </div>
              <div class="form-group">
                <label>Phone</label>
                <input type="text" class="form-control" required />
              </div>
            </div>
            <div class="modal-footer">
              <input
                type="button"
                class="btn btn-default"
                data-dismiss="modal"
                value="Cancel"
              />
              <input type="submit" class="btn btn-success" value="Add" />
            </div>
          </div>
        </div>
      </div>

      <div id="editEmployeeModal" class="modal fade">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Employee</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                &times;
              </button>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control" required />
              </div>
              <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control" required />
              </div>
              <div class="form-group">
                <label>Address</label>
                <textarea class="form-control" required></textarea>
              </div>
              <div class="form-group">
                <label>Phone</label>
                <input type="text" class="form-control" required />
              </div>
            </div>
            <div class="modal-footer">
              <input
                type="button"
                class="btn btn-default"
                data-dismiss="modal"
                value="Cancel"
              />
              <input type="submit" class="btn btn-info" value="Save" />
            </div>
          </div>
        </div>
      </div>

      <div id="deleteEmployeeModal" class="modal fade">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Delete Employee</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                &times;
              </button>
            </div>
            <div class="modal-body">
              <p>Are you sure you want to delete these Records?</p>
              <p class="text-warning">
                <small>This action cannot be undone.</small>
              </p>
            </div>
            <div class="modal-footer">
              <input
                type="button"
                class="btn btn-default"
                data-dismiss="modal"
                value="Cancel"
              />
              <input type="submit" class="btn btn-danger" value="Delete" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Employee;
