import React from "react";

export const Goals = () => {
  return (
    <div>
      <div>
        <h1>Financial Goals</h1>
        <p>Set and track your financial goals</p>
      </div>
      <div className="addGoalForm">
        <div>
          <h2>Create New Goal</h2>
          <p>Set a new financial goal</p>
        </div>
        <form action="">
          <div>
            <label htmlFor="">Goal Name</label>
            <input
              type="text"
              name="goalName"
              placeholder="Rent, New car, Emergency fund, etc."
              value=""
              required
            />
          </div>
          <div>
            <label htmlFor="">Target Amount</label>
            <input
              type="number"
              name="goalAmt"
              placeholder="# 0.00"
              value=""
              required
            />
          </div>
          <div>
            <label htmlFor="">Current Amount (Optional)</label>
            <input
              type="number"
              name="currentAmt"
              placeholder="# 0.00"
              value=""
            />
          </div>
          <div>
            <label htmlFor="">Target Date</label>
            <input
              type="date"
              name="targetDate"
              placeholder="Pick a date"
              value=""
            />
          </div>
          <div>
            <label htmlFor="">Goal Category</label>
            <select name="" id="">
              <option value="">Savings</option>
              <option value="">Investment</option>
              <option value="">Education</option>
              <option value="">Debt Repayment</option>
              <option value="">Rent</option>
              <option value="">Vacation</option>
              <option value="">Vehicle</option>
              <option value="">Other</option>
            </select>
          </div>
          <div>
            <button>+ Create Goal</button>
          </div>
        </form>
      </div>
      <div className="addContributionForm">
        <div>
          <h2>Add Contribution</h2>
          <p>Update progress on your goals</p>
        </div>
        <div>
          <div>
            <label htmlFor="">Select Goal</label>
            <select name="" id="">
              <option value=""></option>
            </select>
          </div>
          <div>
            <label htmlFor="">Contribution Amount</label>
            <input
              type="number"
              name="goalAmt"
              placeholder="# 0.00"
              value=""
              required
            />
          </div>
          <div>
            <button>Add Contribuion</button>
          </div>
          <div>
            <div>
              <p>Goal Progress</p>
            </div>
            <div>
              <div>
                <p>"goal name here"</p>
              </div>
              <div>
                <span>"contribution amount here"/</span>
                <span>"goal amount here"</span>
              </div>
              <div>"Progress bar here"</div>
              <p>"progress in percentage"</p>
            </div>
          </div>
        </div>
      </div>
      <div className="goalTable">
        <div>
          <h2>Your Goals</h2>
          <p>Track all your financial goals</p>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Goal</th>
                <th>Category</th>
                <th>Target Date</th>
                <th>Progress</th>
                <th>Amount</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>"Delete icon"</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
