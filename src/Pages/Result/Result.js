import React from 'react';

const Result = ({alldata}) => {
 
  const {examination, year, board, roll, reg} = alldata;
    return (
        <div>
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tbody><tr>
              <td height="50" align="center" valign="middle" class="black16bold">{examination} Result {year}</td>
            </tr>
            <tr>
              <td align="center" valign="middle"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tbody><tr>
                  <td align="center" valign="middle"><table width="100%" border="0" cellpadding="3" cellspacing="1" class="black12">
                    <tbody><tr>
                      <td width="12%" align="left" valign="middle" bgcolor="#EEEEEE">Roll No</td>
                      <td width="27%" align="left" valign="middle" bgcolor="#EEEEEE">{roll}</td>
                      <td width="22%" align="left" valign="middle" bgcolor="#EEEEEE">Name</td>
                      <td width="39%" align="left" valign="middle" bgcolor="#EEEEEE">REJON AHMED</td>
                    </tr>
                    <tr>
                      <td align="left" valign="middle" bgcolor="#EEEEEE">Board</td>
                      <td align="left" valign="middle" bgcolor="#EEEEEE">{board}</td>
                      <td align="left" valign="middle" bgcolor="#EEEEEE">Father's Name</td>
                      <td align="left" valign="middle" bgcolor="#EEEEEE">SHELIM MIA</td>
                    </tr>
                    <tr>
                      <td align="left" valign="middle" bgcolor="#EEEEEE">Group</td>
                <td align="left" valign="middle" bgcolor="#EEEEEE">BUSINESS STUDIES</td>
                      <td align="left" valign="middle" bgcolor="#EEEEEE">Mother's Name</td>
                      <td align="left" valign="middle" bgcolor="#EEEEEE">HELENA AKTER</td>
                    </tr>
                    
                    <tr>
                      <td align="left" valign="middle" bgcolor="#EEEEEE">Type</td>
                      <td align="left" valign="middle" bgcolor="#EEEEEE">REGULAR</td>
                      <td align="left" valign="middle" bgcolor="#EEEEEE">Date of Birth</td>
                      <td align="left" valign="middle" bgcolor="#EEEEEE">N/A</td>
                    </tr>
                    <tr>
                      <td align="left" valign="middle" bgcolor="#EEEEEE">Result</td>
                      <td align="left" valign="middle" bgcolor="#EEEEEE" class="black12bold">PASSED</td>
                      <td align="left" valign="middle" bgcolor="#EEEEEE">Institute</td>
                      <td align="left" valign="middle" bgcolor="#EEEEEE">AMIRJAN COLLEGE</td>
                    </tr>
                    <tr>
                      <td align="left" valign="middle" bgcolor="#EEEEEE">GPA</td>
                      <td align="left" valign="middle" bgcolor="#EEEEEE" class="black12bold" colspan="3">4.44</td>
                    </tr>
                  </tbody></table></td>
                </tr>
                <tr>
                  <td height="40" align="center" valign="middle"><span class="black16bold">Grade Sheet</span></td>
                </tr>
                <tr>
                  <td align="center" valign="middle"><table width="100%" border="0" cellpadding="3" cellspacing="1" class="black12">
                    <tbody><tr class="black12bold">
                      <td width="19%" align="left" valign="middle" bgcolor="#AFB7BE">Code</td>
                      <td width="66%" align="left" valign="middle" bgcolor="#AFB7BE">Subject</td>
                      <td width="15%" align="left" valign="middle" bgcolor="#AFB7BE">Grade</td>
                    </tr>
					<tr>
								  <td align="left" valign="middle" bgcolor="#EEEEEE">101</td>
								  <td align="left" valign="middle" bgcolor="#EEEEEE">BANGLA</td>
								  <td align="left" valign="middle" bgcolor="#EEEEEE">A-</td>
								</tr><tr>
								  <td align="left" valign="middle" bgcolor="#DEE1E4">107</td>
								  <td align="left" valign="middle" bgcolor="#DEE1E4">ENGLISH</td>
								  <td align="left" valign="middle" bgcolor="#DEE1E4">A</td>
								</tr><tr>
								  <td align="left" valign="middle" bgcolor="#EEEEEE">275</td>
								  <td align="left" valign="middle" bgcolor="#EEEEEE">INFORMATION &amp; COMMUNICATION TECHNOLOGY</td>
								  <td align="left" valign="middle" bgcolor="#EEEEEE">A+</td>
								</tr><tr>
								  <td align="left" valign="middle" bgcolor="#DEE1E4">253</td>
								  <td align="left" valign="middle" bgcolor="#DEE1E4">ACCOUNTING</td>
								  <td align="left" valign="middle" bgcolor="#DEE1E4">A</td>
								</tr><tr>
								  <td align="left" valign="middle" bgcolor="#EEEEEE">277</td>
								  <td align="left" valign="middle" bgcolor="#EEEEEE">BUSINESS ORGANIZATION &amp; MANAGEMENT</td>
								  <td align="left" valign="middle" bgcolor="#EEEEEE">A+</td>
								</tr><tr>
								  <td align="left" valign="middle" bgcolor="#DEE1E4">292</td>
								  <td align="left" valign="middle" bgcolor="#DEE1E4">FINANCE, BANKING &amp; INSURANCE</td>
								  <td align="left" valign="middle" bgcolor="#DEE1E4">A+</td>
								</tr><tr>
								  <td align="left" valign="middle" bgcolor="#EEEEEE">239</td>
								  <td align="left" valign="middle" bgcolor="#EEEEEE">AGRICULTURE STUDIES</td>
								  <td align="left" valign="middle" bgcolor="#EEEEEE">A+</td>
								</tr>
                  </tbody></table></td>
                </tr>
              </tbody></table></td>
            </tr>
            <tr>
              <td align="center" valign="middle" height="40"><a href="/" className="links">Search Again</a></td>
            </tr>
 
          </tbody></table>
        </div>
    );
};

export default Result;