---
slug: /q-admin/user-guide
---

# Q Admin Portal User Guide
This user guide provides comprehensive instructions for navigating and utilizing the Quantique Q Admin Portal. It covers essential functionalities from user authentication to managing master data, ensuring a secure and efficient administrative experience.

# 1.	Sign-In and Authentication
This section details the standardized procedures for user sign-in and authentication, ensuring a secure, user-friendly, and consistent experience across all applications.

## 1.1	Initial User Login and Password Reset
Upon a user's initial onboarding or tenant creation, follow this process to facilitate their first login and enable immediate password customization:
1) Credential Delivery: The user receives an email containing their initial login credentials. This email includes:
- Their registered email address or username.
- A system-generated, temporary "dummy password."
- A unique hyperlink to the application's login page.
2)	Accessing the Application: The user clicks the provided application hyperlink, which directs them to the designated login interface.
3)	First-Time Login: On the login page, the user enters their email address (or username) and the temporary dummy password provided in the email.
4)	Initiating Password Reset: After successfully submitting the initial credentials, the user will be presented with an option to reset their password. Click the Reset Password button.
5)	Setting a New Password: The system will then prompt the user to create a new, personalized password. This new password should adhere to the application's defined password policy (e.g., minimum length, complexity requirements).
6)	Confirmation: Once the new password is set, the user can proceed to access the application with their chosen credentials.

## 1.2	Standard Login Procedure
For subsequent logins, users will follow a streamlined process to access the application:
1)	Access Login Page: From the application's landing page, click the Sign In button. This action navigates you to the primary login page.
2)	Enter Credentials: On the login page, provide your authentication details. The system supports login via either:
- Registered Email ID
- Registered Phone Number
3)	Submit Login: After entering your chosen credential (email or phone number) and your associated password, click the Login button.
## 1.3	Multi-Factor Authentication (MFA)
To enhance security, the application incorporates Multi-Factor Authentication (MFA). The method of receiving the One-Time Password (OTP) is determined by the user's pre-configured MFA mapping. Upon successful submission of login credentials, a message "Please enter OTP" will appear.
### 1.3.1	OTP Delivery Methods
**Standard Delivery Channels:**  If your MFA is mapped to standard communication channels, the OTP will be sent to one or more of the following:
- WhatsApp (if configured)
- Registered Email
- Registered Phone Number (via SMS)

**Authenticator App Integration:** If your MFA is mapped to an Authenticator App (e.g., Google Authenticator, Microsoft Authenticator), the following process applies:
- Initial Setup (First-time Authenticator App mapping): During the initial setup of the Authenticator App, you will be required to scan a QR Code displayed on the application's screen. This links your account to the Authenticator App.
- Subsequent Logins: After the initial setup, for every subsequent login attempt, the OTP will exclusively be generated and received within the Authenticator App.
### 1.3.2	OTP Verification
Regardless of the delivery method, you must complete the following steps to verify your identity:
1)	**Retrieve OTP:** Access the designated channel (WhatsApp, email, phone number, or Authenticator App) to retrieve the sent OTP.

2)	**Enter OTP:** Input the received OTP into the designated field on the application's login page.
3)	**OTP Expiration:** The OTP is valid for a maximum of 5 minutes from the time it is sent.
4)	**Resend OTP:** If the OTP expires or is not received, you have the option to click the Resend OTP button to request a new one. A new OTP can be requested after 1 minute.
5)	**Verify:** After entering the valid OTP, click the Verify button to complete the authentication process and gain access to the application.

**Note: -** *After 3 failed login attempts, users will be locked for 30 minutes. After 30 minutes, the user can attempt to log in again. After a total of 5 failed login attempts, the user will be permanently locked from the system and will need to contact a Q Admin/administrator for assistance.*

# Onboard Tenant

After successfully logging in to Q Admin, you will see the "Welcome to Q Admin" message displayed prominently in the center of the page. To begin the tenant onboarding process, follow these steps:

1. Navigate to the side menu bar and Click the three horizontal lines icon to expand the menu
![](/img/products/q-admin/1.png)

2. From the expanded menu, select Onboarding Tenant.
![](/img/products/q-admin/2.png)

- This action opens the Onboarding Tenant page.
![](/img/products/q-admin/2.1.png)


3)	To add a new tenant, click the **Add tenant** button located in the upper-right corner of the page.
![](/img/products/q-admin/3.png)

## 1.1	Categorizing Your Business Partner
The **Add Tenant** page appears. On this page, select one of the following categories to describe your business partner:
- **Insurance Company**
- **Broker/Distributor**
 

4)	Select the option that accurately reflects your business partner's role and click the Next button to proceed.![](/img/products/q-admin/4.png)

As you progress through the tenant onboarding wizard, you will notice a series of checkboxes next to the main headings: Tenant Details, Contact Person Details, Currency & Region Details, Set User Hierarchy Details, and Configuration Details. These checkboxes serve as a visual indicator of your progress, turning yellow as you successfully complete each section.
![](/img/products/q-admin/5.png)

## 1.2	Entering Tenant Details
5)	The Tenant Details page requires comprehensive information about the new tenant. Carefully fill in the following fields:![](/img/products/q-admin/6.png)


- **Tenant Name:** The official name of the tenant.
- **Tenant Type:** Select from the dropdown menu, choosing between B2B (Business-to-Business), B2C (Business-to-Consumer), or B2B2C (Business-to-Business-to-Consumer).
- **Tenant Email ID:** The primary email address for the tenant.
- **Contact Number:** The main contact phone number for the tenant.
- **Hierarchy Level:** Assign a hierarchy level from 1 to 10, indicating their position within the organization.
- **Address:** The complete physical address of the tenant.
- **PAN Number:** The Permanent Account Number (PAN) of the tenant.
- **GSTIN Number:** The Goods and Services Tax Identification Number (GSTIN) of the tenant.
- **Upload Pan Card:** Upload a digital copy of the tenant's PAN Card.
- **Upload GSTIN Document:** Upload a digital copy of the tenant's GSTIN (Goods and Services Tax Identification Number) document.

6)	After entering all the required details and uploading the documents, click **Next**.![](/img/products/q-admin/7.png)

> **Note: -** *On Document Uploads, the maximum file size for uploaded documents (PAN Card and GSTIN) is 4 MB. Supported file extensions include .jpeg, .jpg, and .pdf.*

This action will open the Contact Person Details page.
![](/img/products/q-admin/8.png)

## 1.3	Providing Contact Person Details
7)	On the **Contact Person Details** page, enter the details of the primary contact for the tenant. This person will serve as the main point of contact for administrative and operational communication:![](/img/products/q-admin/9.png) 
- **First Name:** The first name of the contact person.
- **Middle Name:** The middle name of the contact person (if applicable).
- **Last Name:** The last name of the contact person.
- **Contact Number:** The contact person's direct phone number.
- **Email ID:** The contact person's email address.
- **User Status:** Set the user status to either Active or Inactive.

8)	After filling in these details, click **Next**. ![](/img/products/q-admin/10.png) 

- This will open the Currency & Region Details page. 
![](/img/products/q-admin/11.png) 

## 1.4	Defining Currency and Region
The **Add Currency & Region** page allows you to conlfigure the financial and geographical scope for the tenant. 
- **Currency:** Select the applicable currency from the dropdown menu, which will display all possible currency options.
- **Region:** Choose the relevant region from the dropdown menu, which will also display all possible regions.

9)	Once both currency and region are selected, click **Next**.![](/img/products/q-admin/12.png) 

- This action opens the **Set User Hierarchy Details** page. ![](/img/products/q-admin/13.png) 

## 1.5	Setting Hierarchy and User Access Permissions
10)	The **Set Hierarchy & User Access** page is crucial for defining the administrative permissions for the tenant. You will see three radio button options for permissions: ![](/img/products/q-admin/14.png)
- **Hierarchy Management (Permission):** Enabling this permission allows the tenant's administrator to set and manage organizational levels, including zones, regions, and states, within their own tenant structure.
- **Set User (Permission):** Activating this permission provides the tenant's administrator with the ability to manage user-related settings, including 'Type', 'Role', 'User' accounts, 'Hierarchy Level' assignments, and POS (Point of Sale) mapping.
- **Allow API Integrations (Permission):** Granting this permission enables the tenant's administrator to configure and utilize API integrations.

11)	Select the desired permissions by clicking the appropriate radio buttons, and then click the Next button. ![](/img/products/q-admin/15.png)

- This will open the Add Configuration Details page. ![](/img/products/q-admin/16.png)

## 1.6	Configuring Host Details
On the **Configuration Detail** page, you must input the necessary details for both the database host and the server host.

**DB Host Detail:**

12)	Enter the DB Host details. ![](/img/products/q-admin/17.png)
- **DB Name:** Enter the name of the database.
- **Host Name:** Enter the hostname or IP address of the database server.
- **DB Port:** Enter the port number used by the database.
- **User Name:** Enter the username for accessing the database.
- **User Password:** Enter the password for the database user.

**Server Host Detail:**

13)	Scroll down and enter the server host details. ![](/img/products/q-admin/18.png)

- **Server Name:** Enter the name of the server.
- **IP Address:** Enter the IP address of the server.
- **Port:** Enter the port number for the server.
- **Server User Name:** Enter the username for accessing the server.
- **Server User Password:** Enter the password for the server user.

14)	After entering all the host details, scroll up and click **Next**. ![](/img/products/q-admin/19.png)

This action will return you to the **Add Tenant** page, specifically to the **API Wishlist Details** section.

**API Wishlist Details:**

15)	Enter the IP address for API access and then press **Enter**.  ![](/img/products/q-admin/20.png)


**Multi-Factor Authentication (MFA) Configuration:**

16)	This section allows you to configure the method for receiving One-Time Passwords (OTPs) for multi-factor authentication during login. Select one of the following four checkbox options: 
![](/img/products/q-admin/21.png)
- **WhatsApp**
- **Email**
- **Call**
- **Authenticator App**

**Note:-** *Your selection here determines how you will receive the authentication OTP every time you log in. Check the desired options.*

17)	Finally, click the **Submit** button to complete the tenant onboarding process. 
![](/img/products/q-admin/22.png)

A message similar to **"Updated tenant with Tenant Id '557' successfully"** will appear in the upper-right corner, and you will be redirected to the **Onboard Tenant** page. ![](/img/products/q-admin/23.png) 


### 1.6.1	Managing Onboarded Tenants
Once a tenant is successfully onboarded, they will appear in the **Tenant list** on the **Onboarding Tenant** page. The system provides several tools to effectively manage and filter your tenant list.

**Search Field:** 
1)	Use the search field to quickly locate a specific tenant by entering their information (e.g., name, ID).  
![](/img/products/q-admin/24.png)

**Tenant Status Filters:**

2)	You can view tenants based on their status by checking the corresponding options: "all," "Active," and "Inactive." ![](/img/products/q-admin/25.png)

**Date Filter Option:**

3)	This feature allows you to view tenants onboarded within a specific date range. Click the calendar icon, select a start date, then an end date, and click the **Search** button. To clear the date filter, click the blue **X** icon.  ![](/img/products/q-admin/26.png)

### 1.6.2	Tenant Management Actions
You can view all added tenants in the table on the **Onboard Tenant** page. The table also includes an Actions column that allows you to perform various user actions:

**Edit:**
1)	To modify an existing tenant's details, slide horizontally on the table to locate the desired tenant and click the **edit icon** next to their entry. 
![](/img/products/q-admin/27.png)

- This will initiate the tenant editing journey, starting from the **"Select the category that best describes your Tenant"** step. 
![](/img/products/q-admin/28.png)

2)	Make your required edits and click **Submit**. 
![](/img/products/q-admin/29.png)


- An **"Updated tenant with Tenant Id 'Number' successfully"** message appears in the upper-right corner. You are then redirected back to the Onboard Tenant page.  
![](/img/products/q-admin/30.png)


**Delete:** 

3)	To remove a Tenant record, locate the Tenant and click the delete icon next to its entry.  
![](/img/products/q-admin/31.png)

**Note: -** *The Tenant record is soft-deleted (removed from the application but saved by Quantique).*


- A **"Deleted successfully"** message appears in the upper-right corner. You are then redirected back to the **Onboard Tenant** page. 
![](/img/products/q-admin/32.png)

**Menu Privilege:**

4)	To manage a tenant's menu privileges, locate the tenant and click the menu privilege icon next to their entry. 
![](/img/products/q-admin/33.png)


- This opens the **Menu Privilege Management** page. ![](/img/products/q-admin/34.png)

- On this page, you will see sections for **Masters and User Privileges**. 
![](/img/products/q-admin/35.png)

5)	For **Masters**, click the **plus icon** next to "Masters" to expand a dropdown menu listing all master entities.![](/img/products/q-admin/36.png) 

6)	Select the desired **master** entities, and then choose either **Read** or **Read-Write** access as needed. ![](/img/products/q-admin/37.png)

7)	Similarly, for **User Privileges**, click the **plus icon** next to "User Privileges" to open a dropdown menu with all user privilege lists. ![](/img/products/q-admin/38.png)


8)	Select the desired user privileges, and then choose either **Read** or **Read-Write** access as needed.  ![](/img/products/q-admin/39.png)

9)	After making your selections, click the **Update Data** button. ![](/img/products/q-admin/40.png)

- A message like **"Updated tenant privilege with Tenant Id 'Name' successfully"** will appear in the upper-right corner, and you will be redirected to the Onboard Tenant page. 
![](/img/products/q-admin/41.png)

**Product Privilege**

10)	To manage a tenant's product privileges, locate the tenant and click the **product privilege icon** next to their entry. ![](/img/products/q-admin/42.png)

- This opens the **Product Privilege Management** page. ![](/img/products/q-admin/43.png)

11)	On this page, select the **checkboxes** next to the products you want to assign to the tenant. Then, choose the appropriate **product privileges**. ![](/img/products/q-admin/44.png)

12)	Click the **Update Data** button. ![](/img/products/q-admin/45.png)

- A message like **"Updated tenant privilege with Tenant Id 'Name' successfully"** will appear in the upper-right corner, and you will be redirected to the Onboard Tenant page. ![](/img/products/q-admin/46.png)


# User Privileges

The Admin section provides comprehensive tools to manage different aspects of user access and organizational structure within the system. Here, you can add and oversee various user types, user details, define their roles, and establish hierarchy levels.

1)	Navigate to the **side menu bar** and Click the **three horizontal lines** icon to expand the menu. ![](/img/products/q-admin/47.png)

2)	From the expanded menu, select **User Privileges**. 
![](/img/products/q-admin/48.png)


3)	This action opens the **User Privileges** page. Under this section, you can view four options: User Type, Role, Hierarchy, and User. ![](/img/products/q-admin/49.png)

## 1.1	Add User Types
The **User Type** option allows you to categorize users within the system.

To add a new user type:
1)	On the **User Privileges** page, click the **User Type** option. ![](/img/products/q-admin/50.png)

- The **User Type** page opens. ![](/img/products/q-admin/51.png)

2)	In the upper-right corner of the page, click **Add User Type**. ![](/img/products/q-admin/52.png)

- The **Add Type Details** page appears.
![](/img/products/q-admin/53.png) 

3)	Enter the following details: 
![](/img/products/q-admin/54.png)
- **Tenant:** Select the tenant from the dropdown menu.
**Note:** *If you are logged in with tenant credentials, this field is not visible.*

- **User Type:** Select the user type from the dropdown menu.
- **Label (In Case of Other User Type):** This field is read-only unless you select **Other** from the User Type dropdown menu. If you select **Other**, you can enter a new label as required.

4)	After completing the required details, click **Save**.  ![](/img/products/q-admin/55.png)

- A confirmation message, such as **"Added user type "Admin"** successfully," appears in the upper-right corner, and you are redirected to the User Type page. ![](/img/products/q-admin/56.png)

### 1.1.1	Managing User Type
Once a **user typ**e is added, it appears in the **User Type** list on the User Type page. The system provides tools to manage and filter this list:

**Search Field:**
1)	Enter information (e.g., **name**, **ID**) into the search field to quickly locate a specific user type. 
![](/img/products/q-admin/57.png)

**Date Filter Option:**

2)	To view user types added within a specific date range, click the **calendar icon**, select a start date and an end date, and then click **Search**. To clear the filter, click the blue **X** icon. ![](/img/products/q-admin/58.png)

### 1.1.2	User Types Management Actions 
The User Type table includes an Actions column with the following options:

**Edit:** 
1)	To modify an existing user type, locate the desired user type and click the **edit icon** next to its entry. ![](/img/products/q-admin/59.png)

- The Edit Type Details page opens. 
(http://localhost:3000/img/60.png)

2)	Make your required edits and click **Update**. ![](/img/products/q-admin/61.png)

- A message like **"User Type 'Name' is deactivated successfully"** will appear in the upper-right corner, and you will be redirected to the User type page. ![](/img/products/q-admin/62.png)

3)	At the bottom of the page, view the total record **count and use the pagination controls** to navigate through tenant entries. ![](/img/products/q-admin/63.png)

## 1.2	Add Roles
The Roles option allows you to define different roles within the system and assign permissions.
To add a new role:
1)	On the **User Privileges** page, click the **Roles** option and the **Roles** page opens. ![](/img/products/q-admin/64.png)


2)	On the upper-right corner of the page, click **Add Roles**. ![](/img/products/q-admin/65.png)

- The **Add Role Details** page opens. ![](/img/products/q-admin/66.png)

3)	Enter the following details: ![](/img/products/q-admin/67.png)

- **Tenant:** Select the tenant from the dropdown menu.
**Note: -** *If you are logged in with tenant credentials, this field is not visible.*
- **User Type:** Select the user type from the dropdown menu.
- **Role:** Enter the role name as required.
- **Status:** Choose the status for the role from the dropdown menu (e.g., Active, Inactive).

4)	After completing the required details, click **Save**. ![](/img/products/q-admin/68.png)

- A confirmation message, such as **"Added role "Admin" successfully,"** appears in the upper-right corner, and you are redirected to the Role page.  ![](/img/products/q-admin/69.png)

### 1.2.1	Managing Role
Once a role is added, it appears in the **Role list** on the **Role** page. The system provides tools to manage and filter this list:

**Search Field:** 
1)	Enter information (e.g., **Tenant Name**, **Role Name**) into the search field to quickly locate a specific role. ![](/img/products/q-admin/70.png)

### 1.2.2	Roles Management Actions
The Role table includes an Actions column with the following options:

**Edit:** 
1)	To modify an existing **role**, locate the desired role and click the **edit icon** next to its entry. ![](/img/products/q-admin/71.png)

- The Edit Role Details page opens. ![](/img/products/q-admin/72.png)

2)	Make your required edits and click **Submit**. You are then redirected back to the **Roles** page. ![](/img/products/q-admin/72.png)

- An **"Update role “name” successfully"** message appears in the upper-right corner. You are then redirected back to the Role page. ![](/img/products/q-admin/73.png)


**Note: -** *BUSINESS USER and SUPER ADMIN roles are not editable by tenants or by Quantique Q administrators to prevent structural impact.*

**Delete:**

3)	To remove a **role record**, locate the role and click the **delete icon** next to its entry. ![](/img/products/q-admin/74.png)

4)	A confirmation message appears: **“Are you sure you want to delete it?”** To proceed, select the **Confirm**. To cancel, select **Cancel**. ![](/img/products/q-admin/75.png)

- The role record is soft-deleted (removed from the application but saved by Quantique), and a **"Deleted successfully"** message appears. You are then redirected back to the **Role** page. ![](/img/products/q-admin/76.png)

**Menu Privilege:**

5)	To manage a role’s menu privileges, locate the role and click the **menu privilege icon** next to its entry.![](/img/products/q-admin/77.png) 

- The **Menu Privilege Management** page. On this page, you can view sections for **Master**s and **User Privileges**. ![](/img/products/q-admin/78.png) 

6)	For Masters, click the **plus icon** next to **"Masters"** to expand a dropdown menu.  ![](/img/products/q-admin/79.png) 

7)	Select the desired **master entities**, and then choose either **Read** or **Read-Write** access as needed. ![](/img/products/q-admin/80.png) 

8)	Similarly, for **User Privileges**, click the plus icon next to **"User Privileges"** to expand a dropdown menu. ![](/img/products/q-admin/81.png) 

9)	Select the desired user privileges, and then choose either **Read** or **Read-Write** access as needed. ![](/img/products/q-admin/82.png) 

10)	After making your selections, click **Update Data**.  ![](/img/products/q-admin/83.png) 

- A confirmation message, such as **"Updated tenant privilege with Tenant Id 'Name' successfully,"** appears in the upper-right corner, and you are redirected to the Role page. ![](/img/products/q-admin/84.png) 

**Access:**

11)	To manage a **role’s access**, locate the role and click the access icon next to it.  ![](/img/products/q-admin/85.png) 

- This opens the Access page.  ![](/img/products/q-admin/86.png) 

12)	Choose read or **read/write** from the Role Access dropdown menu as required, and then click **Save**.  ![](/img/products/q-admin/87.png) 


- You are redirected to the **Role** page.![](/img/products/q-admin/88.png)  

**Product Privilege:**

13)	To manage a role's **product privileges**, locate the role and click the **product privilege icon** next to it. ![](/img/products/q-admin/89.png)  

- This opens the **Product Privilege Management** page. ![](/img/products/q-admin/90.png) 

14)	On this page, you can see a list of products. **Check the boxes** next to the products you want to assign to the role. ![](/img/products/q-admin/91.png) 

15)	Then, click **Update Data**.  ![](/img/products/q-admin/92.png) 

- A confirmation message, such as **"Updated tenant privilege with Tenant Id 'Name' successfully,"** appears in the upper-right corner, and you are redirected to the Role page. ![](/img/products/q-admin/93.png) 

- At the bottom of the **Role page**, view the total record count and use the pagination controls to navigate through tenant entries. ![](/img/products/q-admin/94.png) 

## 1.3	User Hierarchy
The Hierarchy option allows you to define hierarchical levels within your organization.

To add a new hierarchy level:
1)	On the **User Privileges** page, click the **Hierarchy** option. The **User Hierarchy page** opens. ![](/img/products/q-admin/95.png) 

2)	In the upper-right corner of the page, click **Add Hierarchy**. ![](/img/products/q-admin/96.png) 

- The **Add Designation page** opens. ![](/img/products/q-admin/97.png) 

3)	Enter the following details: ![](/img/products/q-admin/98.png)   
- **Tenant Name:** Select the tenant name from the dropdown menu for which this hierarchy level is being defined. **Note: -** *If you are logged in with tenant credentials, this field is not visible.*
- **Hierarchy Levels:** Choose the specific hierarchy level from the dropdown menu (e.g., Zone, Region, State, Branch).
- **Hierarchy Name:** Enter the hierarchy name as required.

4)	After completing the required details, click **Save**.![](/img/products/q-admin/99.png)   

- A confirmation message, such as **"Added Hierarchy successfully,"** appears in the upper-right corner, and you are redirected to the User Hierarchy page. **(Add image)**

### 1.3.1	Managing Hierarchy
Once a hierarchy is added, it appears in the Hierarchy list on the User Hierarchy page. The system provides tools to manage and filter this list:
Search Field: 
1)	Enter information (e.g., **name**, **ID**) into the search field to quickly locate a specific hierarchy. ![](/img/products/q-admin/100.png) 

**Date Filter Option:**

2)	To view hierarchies added within a specific date range, click the **calendar icon**, select a start date and an end date, and then click Search. To clear the filter, click the blue **X icon**. ![](/img/products/q-admin/101.png) 

### 1.3.2	Hierarchy Management Actions
The User Hierarchy table includes an Actions column with the following options:
Edit: 
1)	To modify an existing user hierarchy, locate the desired hierarchy and click the **edit icon** next to its entry. ![](/img/products/q-admin/102.png) 

- The **Edit Designation** page opens. ![](/img/products/q-admin/103.png) 

2)	Make your required edits and click **Update**. You are then redirected back to the **User Hierarchy** page. ![](/img/products/q-admin/104.png) 

- A confirmation message, such as **"Updated Hierarchy successfully,"** appears in the upper-right corner, and you are redirected to the **Role** page. **(Add image)**

**Note: -** *The TENANT user hierarchy is not editable by tenants or by Quantique Q administrators to prevent structural impact.*

3)	At the bottom of the Hierarchy page, view the total record count and use the pagination controls to navigate through tenant entries. ![](/img/products/q-admin/105.png)

## 1.4	User
The User option allows you to manage individual user accounts.

To add a new user:
1)	On the **User Privileges** page, click the User option. The User page opens. ![](/img/products/q-admin/106.png)

2)	In the upper-right corner of the page, click **Add User**. The **Add User Details page** appears. ![](/img/products/q-admin/107.png)

3)	Enter the following details: ![](/img/products/q-admin/108.png)

- **First Name:** Enter the user's first name.
- **Middle Name:** Enter the user's middle name (optional).
- **Last Name:** Enter the user's last name.
- **Email:** Enter the user's email ID.
- **Mobile:** Enter the user's mobile number.
- **Tenant:** Choose the tenant from the dropdown menu.
- **User Type:** Choose the user type from the dropdown menu.
- **Role:** Choose the role from the dropdown menu.
- **Designation:** Choose the designation from the dropdown menu.
- **Status:** Choose the status (e.g., Active, Inactive).
- **Profile Image:** Upload a digital copy of the user's profile image.

4)	After completing the required details, click **Save**. ![](/img/products/q-admin/109.png)

- A confirmation message, such as **"An email has been sent to the user’s email with the link to set their password,"** appears in the upper-right corner, and you are redirected to the Users page. ![](/img/products/q-admin/110.png)

### 1.4.1	Managing User
Once a user is added, they appear in the User list on the User page. The system provides tools to manage and filter this list:
Search Field:
1)	Enter information (e.g., **Tenant Name**, **Name**) into the search field to quickly locate a specific user. ![](/img/products/q-admin/111.png)

### 1.4.2	User Management action
The User table includes an Actions column with the following options:

**Edit:** 
1)	To modify an existing user's details, locate the desired user and click the **edit icon** next to their entry. ![](/img/products/q-admin/112.png) 

- The **Edit User Details** page opens.  ![](/img/products/q-admin/113.png) 

2)	Make your required edits and click **Submit**. You are then redirected back to the **User** page. ![](/img/products/q-admin/114.png) 

- A message similar to **"Updated user with user Id '557' successfully"** will appear in the upper-right corner, and you will be redirected to the Users page. ![](/img/products/q-admin/115.png) 

**Delete:** 

3)	To remove a **user record**, locate the user and click the **delete icon** next to their entry.  ![](/img/products/q-admin/116.png) 
 
**Note: -** *The user record is soft-deleted (removed from the application but saved by Quantique)*


4)	A confirmation message appears: **“Are you sure you want to delete it?”** To proceed, select the **Confirm**. To cancel, select **Cancel**.![](/img/products/q-admin/117.png) 

- A **"Deleted successfully"** message appears in the upper-right corner. You are then redirected back to the User page.![](/img/products/q-admin/118.png) 

**Menu Privilege:**

5)	To manage a user’s menu privileges, locate the user and click the **menu privilege ico**n next to their entry. ![](/img/products/q-admin/119.png) 

- This opens the **Menu Privilege Management** page. On this page, you can view sections for Masters and User Privileges.  ![](/img/products/q-admin/120.png) 

6)	For Masters, click the **plus icon** next to "Masters" to expand a dropdown menu.  ![](/img/products/q-admin/121.png) 

7)	Select the desired **master entities**, and then choose either **Read** or **Read-Write** access as needed. ![](/img/products/q-admin/122.png) 

8)	Similarly, for User Privileges, click the **plus icon** next to "User Privileges" to expand a dropdown menu. ![](/img/products/q-admin/123.png) 

9)	Select the desired **user privileges**, and then choose either **Read** or **Read-Write** access as needed. ![](/img/products/q-admin/124.png) 

10)	After making your selections, click the Update Data button. ![](/img/products/q-admin/125.png)

- A confirmation message, such as **"Updated tenant privilege with Tenant Id 'Name' successfully,"** appears in the upper-right corner, and you are redirected to the User page.  ![](/img/products/q-admin/126.png)

- At the bottom of the User page, view the total record count and use the pagination controls to navigate through tenant entries.  ![](/img/products/q-admin/127.png)

# Master
The Master section serves as the central hub for the creation, management, and maintenance of core entities within the system. This includes products, sub-products, and all associated metadata. This module facilitates the ability to create, read, update, and delete (CRUD) these foundational elements, manage their related attributes such as coverage details, terms, and conditions, and implement version control to track changes in product offerings over time.

## 1.1	Product
The "Product" master facilitates the definition and management of core products and their sub-products.
1)	Click on the **Master** dropdown menu and select the **Product** option. This will open the **Product** page. ![](/img/products/q-admin/128.png)

- This opens **Product Master** page.  ![](/img/products/q-admin/129.png)

2)	In the upper-right corner of the page, click **Add Product**. The Add Product Details page opens.  ![](/img/products/q-admin/130.png)

3)	Enter the following details: ![](/img/products/q-admin/131.png)
- **Parent Product:** Enter the product name.
- **Child Product:** Enter the sub-product.
- **Group Code:** Enter the group code.
- **Sub-group Code:** Enter the sub-group code.
- **Group Label:** Enter the group label.
- **Status:** Choose the status from the dropdown menu (Active or Inactive).
- **Is Motor Vehicle:** Choose **"Yes"** or **"No"** from the dropdown menu.

4)	After completing the required details, click **Save**.  ![](/img/products/q-admin/132.png) 

- A **"Product Add successfully"** message appears in the upper-right corner. You are then redirected back to the Product Master page. (Add image)

### 1.1.1	Managing Products
**Search Field:** 
1)	Enter information into the **search field** to quickly locate a specific Product. ![](/img/products/q-admin/133.png) 

### 1.1.2	Product Management action
**Edit:** 
1)	To modify the **Product**, locate the desired Product and click the **edit icon** next to its entry. ![](/img/products/q-admin/134.png) 

2)	The Edit **Product Details** page opens. ![](/img/products/q-admin/135.png) 

3)	Make your required edits and click **Update**.  ![](/img/products/q-admin/136.png)  

- An **"Update Product “name” successfully"** message appears in the upper-right corner. You are then redirected back to the Product page. (Add image)

**Delete icon:** 

4)	To remove a product, locate the product and click the **delete icon** next to its product.  
![](/img/products/q-admin/138.png)  

- A confirmation message appears: **“Are you sure you want to delete it?”** To proceed select **Confirm** and to cancel, select **Cancel**. ![](/img/products/q-admin/139.png)  

- A **"Deleted successfully"** message appears in the upper-right corner. You are then redirected back to the Product **Master** page. (Add image)

**Note: -** *The product record is **soft-deleted** (removed from the application but saved by Quantique).*

## 1.2	Insurance Company
The "Insurance Company" master provides comprehensive functionality for managing details of various insurance companies.
1)	Click on the **Master** dropdown menu and select the **Insurance Company** option.  ![](/img/products/q-admin/140.png)  

- This opens the **IC Master** page. ![](/img/products/q-admin/141.png)

2)	In the upper-right corner of the page, click **Add IC**. The Add Insurance Company Details page opens. ![](/img/products/q-admin/142.png)

3)	Enter the following details:  ![](/img/products/q-admin/143.png)
- **IC Code:** Enter the Insurance Company Code.
- **IC Name:** Enter the Insurance Company Name.
- **Proposal Prefix:** Enter the proposal prefix.
- **Name:** Enter a general name (likely referring to the contact person or primary representative).
- **Address:** Enter the company's address.
- **Sector:** Choose the sector from the dropdown menu.
- **Support Email:** Enter the support email address.
- **Mobile Number:** Enter the mobile number.
- **Landline Number:** Enter the landline number.
- **Toll-free Number:** Enter the toll-free number.
- **Website URL:** Enter the website URL.
- **Is Break in Waiver:** Enter if there is a break in waiver (boolean, e.g., Yes/No).
- **Break in Waiver In Days:** Enter the break in waiver in days (numeric).
- **Broker Code:** Enter the broker code.
- **IFSC Code:** Enter the IFSC Code.
- **Bank Branch:** Enter the Bank Branch.
- **Bank Account No.:** Enter the bank account number.
- **Bank Name:** Enter the bank name.
- **CMS Client Code:** Enter the CMS Client Code.
- **UNI No.:** Enter the UNI number.
- **Status:** Choose the status from the dropdown menu (Active or Inactive).
- **Break in Mobile Number:** Enter multiple mobile numbers separated by commas (e.g., 8765689797, 8665468663).
- **Break in Email Address:** Enter multiple email addresses separated by commas (e.g., Sana.shaikh@gmail.com, Prakas.M@gmail.com).
- **Endorsement in Mobile Number:** Enter multiple mobile numbers for endorsements separated by commas.
- **Endorsement in Email Address:** Enter multiple email addresses for endorsements separated by commas.

4)	After completing the required details, click **Save**. ![](/img/products/q-admin/144.png)

- A **"Added IC successfully"** message appears in the upper-right corner. You are then redirected back to the **IC Master** page.  ![](/img/products/q-admin/145.png)

### 1.2.1	Managing Insurance Companies:
**Search Field:** 
1)	Enter information into the **search field** to quickly locate a specific IC. ![](/img/products/q-admin/146.png)

**Date Filter Option:**

2)	This feature allows you to view IC within a specific date range. Click the calendar icon, select a **start date**, then an **end date**, and click **Search**. To clear the date filter, click the **blue X** icon. ![](/img/products/q-admin/147.png)


### 1.2.2	IC Management action:
**Edit:**
1)	To modify the **IC**, locate the desired IC and click the **edit icon** next to its entry.  ![](/img/products/q-admin/148.png)

2)	The **Edit Insurance Company Details** page opens.  ![](/img/products/q-admin/149.png)


3)	Make your required edits and click **Update**. ![](/img/products/q-admin/150.png)


- An **"Update IC successfully"** message appears in the upper-right corner. You are then redirected back to the **IC Master** page.   ![](/img/products/q-admin/151.png)

## 1.3	Download Master

The **Download Master** allows you to export data from individual masters or all masters at once.
1)	Select the **Master** dropdown menu, and then choose Download **Master**. The **Download All Master** page opens. ![](/img/products/q-admin/152.png)


### 1.3.1	Download Data by Individual Master
To download records for a specific master:
1)	Under **Download By Individual Master**, select the desired master from the Master dropdown menu.![](/img/products/q-admin/153.png) 

2)	Choose the **Status** for the records you want to download (e.g., **Active**, **Inactive**, **All**).![](/img/products/q-admin/154.png)  

3)	Click **Export**. ![](/img/products/q-admin/155.png)  


### 1.3.2	Download All Masters
To download all master data at once:
1)	Click Download All **Masters**. ![](/img/products/q-admin/156.png)  


## 1.4	Plan
The Plan master allows you to define and manage various plans within the system.
1)	Click on the **Master** dropdown menu and select the **Plan** option. ![](/img/products/q-admin/157.png)  

- The **Plan Master** page opens. ![](/img/products/q-admin/158.png)  

2)	In the upper-right corner of the page, click **Add Plan**. The Add Plan Details page opens. ![](/img/products/q-admin/159.png) 

3)	Enter the following details:  ![](/img/products/q-admin/160.png)  
- **Tenant:** Select the relevant tenant from the dropdown menu.
- **Plan Name:** Enter a unique name for the plan.
- **PPlan Amount:**  Enter the monetary amount associated with the plan.
- **Plan Description:** Provide a brief description of the plan.
- **Status:** Set the status as Active or Inactive to control its visibility and availability.

4)	After completing the required details, click **Save**.  ![](/img/products/q-admin/161.png)  

- A **"Added Plane “Name” successfully"** message appears in the upper-right corner. You are then redirected back to the Plan Master page. ![](/img/products/q-admin/162.png)  

### 1.4.1	Managing Plans
Search Field: 
1)	Enter information into the **search field** to quickly locate a specific **Plan**. ![](/img/products/q-admin/163.png)  

**Date Filter Option:**

2)	This feature allows you to view Plan within a specific date range. Click the **calendar icon**, select a start date, then an end date, and click the Search button. To clear the date filter, click the blue X icon.![](/img/products/q-admin/164.png) 

### 1.4.2	Plans Management action:
**Edit:** 
1)	To modify the **plan**, locate the desired plan and click the **edit icon** next to its entry. ![](/img/products/q-admin/165.png) 

- The **Edit Plan** Details page opens.  ![](/img/products/q-admin/166.png) 

2)	Make your required edits and click **Update**. 
![](/img/products/q-admin/167.png) 

- An **"Update Plan “name” successfully"** message appears in the upper-right corner. You are then redirected back to the Plan Master page.  ![](/img/products/q-admin/168.png) 

## 1.5	Menu
The **"Menu"** master allows for the creation and management of navigation menu items within the application.
1)	Click on the Master dropdown menu and select the Menu option. ![](/img/products/q-admin/169.png) 

- This opens the **Menu** page. ![](/img/products/q-admin/170.png) 

2)	In the upper-right corner of the page, click **Add Menu Detail**. The Add Menu Details page opens.  ![](/img/products/q-admin/171.png) 


3)	Enter the following details: ![](/img/products/q-admin/172.png) 
- **Menu Parent:** Select or enter the parent menu category.
- **Menu Name:** Enter the display name of the menu item.
- **Menu URL:** Specify the link (e.g., /dashboard, https://example.com)
- **Visibility Scope:** Define who can see this menu (e.g., Admin, User, Public)
- **Status:** Set as Active or Inactive to control visibility.
- **Enable Redirect:** Toggle if the menu should redirect to another page.
- **Upload Menu Icon:** Add an icon for better visual identification.

4)	After completing the required details, click **Save**. ![](/img/products/q-admin/173.png) 

A **"Added menu “Name” successfully"** message appears in the upper-right corner. You are then redirected back to the Menu page. ![](/img/products/q-admin/174.png) 

### 1.5.1	Managing Menus
**Search Field:** 
1)	Enter information into the **search field** to quickly locate a specific Menu. ![](/img/products/q-admin/175.png)

### 1.5.2	Menu Management action:
**Edit**
1)	To modify the menu, locate the desired menu and click the edit icon next to its entry.  ![](/img/products/q-admin/176.png)

- The **Edit Menu Details** page opens. ![](/img/products/q-admin/177.png)

2)	Make your required edits and click **Update**. ![](/img/products/q-admin/178.png)

An **"Update menu “Name” successfully"** message appears in the upper-right corner. You are then redirected back to the **Menu** page. ![](/img/products/q-admin/179.png)

**Delete icon:**

3)	To remove a Menu record, locate the Menu and click the **delete icon** next to its entry. ![](/img/products/q-admin/180.png)


- A confirmation message appears: **“Are you sure you want to delete it?”** To proceed, select **Confirm**. To cancel, select **Cancel**. ![](/img/products/q-admin/181.png)

- A **"Deleted successfully"** message appears in the upper-right corner. You are then redirected back to the Product Master page. (Add image)

**Note: -** *The Menu record is soft-deleted (removed from the application but saved by 
Quantique)*

## 1.6	Pincode
The **"Pincode Master"** enables the management of postal code information, including associated state, city, district, and area.
1)	Click on the **Master** dropdown menu and select the **Pincode** option. ![](/img/products/q-admin/182.png)

2)	The **Pincode Master** page opens. ![](/img/products/q-admin/183.png)

3)	In the upper-right corner of the page, click **Add Pincode** . The Add **Pincode Details page** opens.![](/img/products/q-admin/184.png) 

4)	Enter the following details: ![](/img/products/q-admin/185.png)
- **Country:** Choose the country from the dropdown menu.
- **State Name:** Choose the state name from the dropdown menu.
- **City name:** Choose the city name from the dropdown menu.
- **Pin code:** Enter the pin code.
- **Area:** Choose the area from the dropdown menu.
- **Status:** Choose the status from the dropdown menu.
 
5)	After completing the required details, click **Save**. ![](/img/products/q-admin/186.png)

A **"Added Pin “400051” successfully"** message appears in the upper-right corner. You are then redirected back to the **Pincode Master** page. ![](/img/products/q-admin/187.png)

### 1.6.1	Managing Pincodes
**Search:** 
1)	Enter information into the **search field** to quickly locate a specific **Pincode**. ![](/img/products/q-admin/188.png)

**Status Display:**

2)	This feature allows you to view pincode within a specific date range. Click the **calendar icon**, select a start date, then an end date, and click the Search button. To clear the date filter, click the blue **X** icon.![](/img/products/q-admin/189.png) 

### 1.6.2	Pincodes Management action:
**Edit:** 
1)	To modify the **pincode**, locate the desired pincode and click the **edit icon** next to its entry. ![](/img/products/q-admin/190.png) 

- The **Add Pincode Details** page opens.  ![](/img/products/q-admin/191.png) 

2)	Make your required edits and click **Update**.  ![](/img/products/q-admin/192.png) 

- An **"Update Pincode “500051” successfully"** message appears in the upper-right corner. You are then redirected back to the **Pincode Master** page.  ![](/img/products/q-admin/193.png) 

## 1.7	Make
The **"Make"** master is used to define and manage different vehicle makes.
1)	Click on the **Master** dropdown menu and select the **Make** option.  ![](/img/products/q-admin/194.png) 

- This opens the **Make Master** page. ![](/img/products/q-admin/195.png) 

2)	In the upper-right corner of the page, click **Add Make**. The Add Make Details page opens. ![](/img/products/q-admin/196.png) 


3)	Enter the following details.  ![](/img/products/q-admin/197.png) 
- **Product:** Select the relevant product from the dropdown menu.
- **Make:** Select the make from the dropdown menu.
- **Status:** Choose the status from the dropdown menu (e.g., Active, Inactive). 

4)	After completing the required details, click **Save**.![](/img/products/q-admin/197.png)  

- A **"Added Make “name” successfully"** message appears in the upper-right corner. You are then redirected back to the **Make Master** page. ![](/img/products/q-admin/199.png)  

### 1.7.1	Managing Makes
**Search Field:**
1)	Enter information into the **search field** to quickly locate a specific **Make**. ![](/img/products/q-admin/200.png)  

**Date Filter Option:** 

2)	This feature allows you to view Make within a specific date range. Click the **calendar icon**, select a start date, then an end date, and click the Search button. To clear the date filter, click the blue **X**icon. ![](/img/products/q-admin/201.png)   

### 1.7.2	Make Management action: 
**Edit:**
1)	Enter information into the **search field** to quickly locate a specific **Make**.  ![](/img/products/q-admin/202.png)

- The **Edit Make Details** page opens.  ![](/img/products/q-admin/203.png)

2)	Make your required edits and click **Update**.  ![](/img/products/q-admin/204.png) 

- An **"Update make “name” successfully"** message appears in the upper-right corner. You are then redirected back to the **Make Master** page.   ![](/img/products/q-admin/205.png)

**Delete icon:** 

3)	To remove a make, locate the make and click the **delete icon** next to its make.    ![](/img/products/q-admin/206.png)

- A confirmation message appears: **“Are you sure you want to delete it?”** To proceed, select the Confirm button. To cancel, select the Cancel button.    ![](/img/products/q-admin/207.png)

- A "Deleted successfully" message appears in the upper-right corner. You are then redirected back to the Make Master page. **(Add image)**

**Note: -** T*he Make record is soft-deleted (removed from the application but saved by. Quantique).*

## 1.8	Model
The **"Model"** master facilitates the definition and management of vehicle models, linked to specific makes.
1)	Click on the **Master** dropdown menu and select the **Model** option.     ![](/img/products/q-admin/208.png)

- This opens the **Model Master** page.    ![](/img/products/q-admin/209.png)

2)	In the upper-right corner of the page, click **Add Model**. The **Add Model Details page** opens. ![](/img/products/q-admin/210.png) 

3)	Enter the following details: ![](/img/products/q-admin/211.png)  
- **Make:** Choose the make from the dropdown menu.
- **Model:** Select the model from the dropdown menu.
- **Status:** Choose the status from the dropdown menu.

4)	After completing the required details, click **Save**.![](/img/products/q-admin/212.png)  

- A **"Added model “Name” successfully"** message appears in the upper-right corner. You are then redirected back to the **Model Master** page. **(Add image)**

### 1.8.1	Managing Models:
**Search Field:** 
1)	Enter information into the **search field** to quickly locate a specific **Model**. ![](/img/products/q-admin/213.png)  

**Date Filter Option:**

2)	This feature allows you to view Model within a specific date range. Click the **calendar icon**, select a start date, then an end date, and click the Search button. To clear the date filter, click the blue **X** icon.![](/img/products/q-admin/214.png)   

### 1.8.2	Model Management action
**Edit:**
1)	To modify the Model, locate the desired Model and click the edit icon next to its entry. ![](/img/products/q-admin/216.png)

- The **Edit Model Details page** opens. ![](/img/products/q-admin/217.png)

2)	Make your required edits and click **Update**. ![](/img/products/q-admin/218.png)

- An **"Update model “Name” successfully"** message appears in the upper-right corner. You are then redirected back to the **Model Master** page.  ![](/img/products/q-admin/219.png)


**Delete icon:**
3)	To remove a model, locate the model and click the **delete icon** next to its product.  ![](/img/products/q-admin/220.png)

- A confirm ation message appears: **“Are you sure you want to delete it?”** To proceed, select **Confirm**. To cancel, select **Cancel**.   ![](/img/products/q-admin/221.png)

- A **"Deleted successfully"** message appears in the upper-right corner. You are then redirected back to the **Model Master** page. **(Add image).**

**Note: -** *The model record is soft-deleted (removed from the application but saved by Quantique).*

## 1.9	Variant
The **"Variant"** master allows for the detailed definition of product variants, incorporating a wide array of specifications.
1)	Click on the **Master** dropdown menu and select the **Variant** option.  ![](/img/products/q-admin/222.png)


- This opens the **Variant** Master page. ![](/img/products/q-admin/223.png)

2)	In the upper-right corner of the page, click **Add Variant** . The Add Variant Details page opens.  ![](/img/products/q-admin/224.png)

3)	Enter the following details:  ![](/img/products/q-admin/225.png)
- **Product:** Choose the product from the dropdown menu.
-  **Make:** Choose the make from the dropdown menu.
- **Model:** Choose the model from the dropdown menu.
- **Fuel:** Choose the fuel type from the dropdown menu.
- **CC:** Choose the engine cubic capacity (CC) from the dropdown menu.
- **Variant:** Choose the variant name from the dropdown menu.
- **Segment Type:** Choose the segment type from the dropdown menu.
- **Ex-showroom price:** Choose the ex-showroom price from the dropdown menu.
- **Main Reference Code:** Choose the main reference code from the dropdown menu.
- **Body Type:** Choose the body type from the dropdown menu.
- **GVW:** Choose the Gross Vehicle Weight (GVW) from the dropdown menu.
- **Seating Capacity:** Choose the seating capacity from the dropdown menu.
- **No. of wheels:** Choose the number of wheels from the dropdown menu.
- **Status:** Choose the status from the dropdown menu (Active or Inactive).

4)	After completing the required details, click **Save**.  ![](/img/products/q-admin/226.png)

- A **"Added variant “name” successfully"** message appears in the upper-right corner. You are then redirected back to the **Make Master** page.   ![](/img/products/q-admin/227.png)

### 1.9.1	Managing Variants:
**Search Field:** 
1)	Enter information into the search field to quickly locate a specific Variant.  ![](/img/products/q-admin/228.png) 

**Date Filter Option:** 

2)	This feature allows you to view variant within a specific date range. Click the **calendar icon**, select a start date, then an end date, and click the Search button. To clear the date filter, click the blue **X** icon. ![](/img/products/q-admin/228.png)  

### 1.9.2	Variant Management action
**Edit:**
1)	To modify the Variant, locate the desired Variant and click the **edit icon** next to its entry. ![](/img/products/q-admin/229.png)  

- The **Edit Model Details** page opens.  ![](/img/products/q-admin/230.png)  


2)	Make your required edits and click **Update**.  ![](/img/products/q-admin/232.png)  

- An **"Update model “Name” successfully"** message appears in the upper-right corner. You are then redirected back to the **Model Master** page.   ![](/img/products/q-admin/233.png)  

**Delete icon:**

3)	To remove a model, locate the model and click the **delete icon** next to its product.    ![](/img/products/q-admin/234.png)  

- A confirmation message appears: **“Are you sure you want to delete it?”** To proceed, select **Confirm**. To cancel, select **Cancel**.    ![](/img/products/q-admin/235.png) 

- A **"Deleted successfully"** message appears in the upper-right corner. You are then redirected back to the **Model Master** page. **(Add image)**

**Note: -** *The model record is soft-deleted (removed from the application but saved by Quantique).*

## 1.10	Vehicles
The **"Vehicles"** master serves as a consolidated repository that combines information from the **Make**, **Model**, and **Variant** masters. Any data entered or configured within these individual master sections is automatically integrated and reflected in the Vehicles Master page. This unified view ensures that vehicle details are consistently maintained across the system and provides a single source of truth for referencing complete vehicle configurations.

1)	Click on the **Master** dropdown menu and select the **Vehicles** option.  ![](/img/products/q-admin/236.png) 

- This opens the **Vehicle** Master page.  ![](/img/products/q-admin/237.png) 

### 1.10.1	Managing Vehicles:
**View:**

2)	All Vehicles are visible in the **"Vehicle Master list table"** on the **Vehicle** Master page.   ![](/img/products/q-admin/238.png) 

**Search Field:**

3)	Enter information into the **search field** to quickly locate a specific **Vehicle**.    ![](/img/products/q-admin/239.png) 

**Date Filter Option:** 

4)	This feature allows you to view Vehicle within a specific date range. Click the **calendar icon**, select a start date, then an end date, and click the Search button. To clear the date filter, click the blue **X** icon.  ![](/img/products/q-admin/240.png)  

### 1.10.2	Vehicles Management action:
**Edit:** 
1)	To modify the Vehicles, locate the desired Vehicles and click the **edit icon** next to its entry.  ![](/img/products/q-admin/241.png)  

- The **Edit Vehicle Details** page opens.  ![](/img/products/q-admin/242.png)  

4)	Make your required edits and click **Update**.   ![](/img/products/q-admin/243.png)  

- An **"Update vehicle successfully"** message appears in the upper-right corner. You are then redirected back to the **Vehicle Master** page.   ![](/img/products/q-admin/244.png)  

## 1.11	Fuel Type
The **"Fuel Type"** master enables the definition and management of various fuel types.
1)	Click on the **Master*/* dropdown menu and select the Fuel type option.    ![](/img/products/q-admin/245.png)  

- This opens the **Fuel Type Master** page. ![](/img/products/q-admin/246.png)  

2)	In the upper-right corner of the page, click **Add Fuel Type**. The Add Fuel Type Details page opens.![](/img/products/q-admin/247.png)  

3)	Enter the following details: ![](/img/products/q-admin/248.png)  
- **Fuel Type:** Select the appropriate fuel type from the dropdown menu.
- **Short Name:** Enter an abbreviated identifier for the fuel type (e.g., "DIES" for Diesel)
- **Label:** Provide a descriptive name for the fuel type (e.g., "Premium Unleaded")
- **Status:** Select Active or Inactive from the dropdown to enable/disable the fuel type.

4)	After completing the required details, click **Save**.![](/img/products/q-admin/249.png)   

- A **"Added Fuel Type successfully"** message appears in the upper-right corner. You are then redirected back to the **Plan Master** page. ![](/img/products/q-admin/250.png)   

### 1.11.1	Managing Fuel Types
**Search Field:**
1)	Enter information into the **search field** to quickly locate a specific Fuel.   ![](/img/products/q-admin/251.png)   

**Date Filter Option:**

2)	This feature allows you to view Fuel within a specific date range. Click the **calendar icon**, select a start date, then an end date, and click the Search button. To clear the date filter, click the blue **X** icon.      ![](/img/products/q-admin/252.png)   
  

### 1.11.2	Fuel Management action:
**Edit:** 
1)	To modify the **Fuel**, locate the desired Fuel and click the **edit icon** next to its entry.   ![](/img/products/q-admin/253.png)

- The **Edit Fuel Details** page opens. ![](/img/products/q-admin/254.png) 

2)	Make your required edits and click **Update**. ![](/img/products/q-admin/255.png)  

- An **"Update Fuel successfully"** message appears in the upper-right corner. You are then redirected back to the **Fuel Type Master** page. ![](/img/products/q-admin/256.png)  

## 1.12	Manage RTO
The "Manage RTO Master" section allows for the creation and maintenance of RTO (Regional Transport Office) details.
1)	Click on the **Master** dropdown menu and select the **Manage RTO** option. ![](/img/products/q-admin/257.png)  

- This opens the **RTO Master** page.  ![](/img/products/q-admin/258.png)  

2)	In the upper-right corner of the page, click **Add RTO**. The Add **RTO Details page** opens. ![](/img/products/q-admin/259.png)  

3)	Enter the following details:  ![](/img/products/q-admin/260.png)  
- **RTO Code:** Enter the RTO Code.
- **State:** Choose the state from the dropdown menu. 
- **City:** Choose the city from the dropdown menu.
- **RTO Zone:** Choose the RTO Zone from the dropdown menu.
- **Status:** Choose the status from the dropdown menu.

4)	After completing the required details, click **Save**.  ![](/img/products/q-admin/261.png)  

### 1.12.1	Managing RTO Details:
Search:
1)	Enter information into the **search field** to quickly locate a **specific RTO**.  ![](/img/products/q-admin/262.png)  

**Date Filter Option:** 

2)	This feature allows you to view RTO within a specific date range. Click the **calendar icon**, select a start date, then an end date, and click the Search button. To clear the date filter, click the blue **X** icon.  ![](/img/products/q-admin/263.png)  

### 1.12.2	RTO Management action:
**Edit:** 
1)	To modify the **RTO**, locate the desired RTO and click the **edit icon** next to its entry.  ![](/img/products/q-admin/264.png)  

- The **Edit RTO Details** page opens.   ![](/img/products/q-admin/265.png)  

2)	Make your required edits and click **Update**.    ![](/img/products/q-admin/266.png)  

An **"Update RTO “name” successfully"** message appears in the upper-right corner. You are then redirected back to the **Product page**. **(Add image)**

## 1.13	Bank
The **"Bank"** master is used to manage details of various banks.
1)	Click on the **Master** dropdown menu and select the **Bank** option.  ![](/img/products/q-admin/267.png)  

- This opens the **Bank Master** page.  ![](/img/products/q-admin/268.png) 

2)	In the upper-right corner of the page, click **Add Bank**. The **Add Bank Details** page opens.  ![](/img/products/q-admin/269.png) 

3)	Enter the following details:   ![](/img/products/q-admin/270.png) 
- **Bank Name:** Enter the bank name accurately.
- **Status:** Choose the status from the dropdown menu (Active or Inactive).

4)	After completing the required details, click **Save**.  ![](/img/products/q-admin/271.png) 

- A **"Added Bank successfully"** message appears in the upper-right corner. You are then redirected back to the **Bank Master** page.  ![](/img/products/q-admin/272.png) 

### 1.13.1	Managing Banks:
**Search:**
1)	Enter information into the search field to quickly locate a specific Bank.  ![](/img/products/q-admin/273.png) 

**Date Filter Option:**

2)	This feature allows you to view Banks within a specific date range. Click the **calendar icon**, select a start date, then an end date, and click the Search button. To clear the date filter, click the blue **X** icon. ![](/img/products/q-admin/274.png)  

### 1.13.2	Banks Management action:
**Edit:**
1)	To modify the Bank, locate the desired Bank and click the edit icon next to its entry. ![](/img/products/q-admin/275.png)  

- The Edit **Bank Details** page opens.  ![](/img/products/q-admin/276.png)  

2)	Make your required edits and click **Update**.  ![](/img/products/q-admin/277.png)  

- An **"Update bank “Name” successfully"** message appears in the upper-right corner. You are then redirected back to the **Model Master** page.   ![](/img/products/q-admin/278.png) 


## 1.14	State
The "State" master facilitates the management of state information, including country, state code, and region.
1)	Click on the Master dropdown menu and select the **State** option.    ![](/img/products/q-admin/279.png) 

- This will open the **State Master** page. ![](/img/products/q-admin/280.png) 

2)	In the upper-right corner of the page, click **Add State**. The **Add State Details page** opens.  ![](/img/products/q-admin/281.png) 

3)	Enter the following details:  ![](/img/products/q-admin/282.png) 
- **State Name:** Enter the state name.
- **Select Country:** Choose the country from the dropdown menu.
- **State Code:** Choose the state code from the dropdown menu.
- **Region:** Choose the region from the dropdown menu.
- **Status:** Choose the status from the dropdown menu.

4)	After completing the required details, click **Save**. ![](/img/products/q-admin/283.png) 

- A **"Added State successfully"** message appears in the upper-right corner. You are then redirected back to the State Master page.![](/img/products/q-admin/284.png) 

### 1.14.1	Managing States:
Search:
1)	Enter information into the **search field** to quickly locate a specific **State**. ![](/img/products/q-admin/285.png)

**Date Filter Option:**

2)	This feature allows you to view State within a specific date range. Click the **calendar icon**, select a start date, then an end date, and click the Search button. To clear the date filter, click the blue **X** icon. ![](/img/products/q-admin/286.png)

### 1.14.2	States Management action:
**Edit:**
1)	To modify the **State**, locate the desired state and click the **edit icon** next to its entry. ![](/img/products/q-admin/287.png)

- The **Edit State Details** page opens.  ![](/img/products/q-admin/288.png)

2)	Make your required edits and click **Update**.   ![](/img/products/q-admin/289.png)

- An **"Update State “name” successfully"** message appears in the upper-right corner. You are then redirected back to the **Product** page.   ![](/img/products/q-admin/289.png)

## 1.15	City
The **"City"** master allows for the management of city information, linked to specific **states**.
1)	Click on the Master dropdown menu and select the City option.    ![](/img/products/q-admin/290.png)

- This opens the **City** page.    ![](/img/products/q-admin/291.png)

2)	In the upper-right corner of the page, click **Add City Detail**. The Add City Details page opens. ![](/img/products/q-admin/293.png)
 

3)	Enter the following details:  ![](/img/products/q-admin/294.png)
- **State Name:** Choose the state name from the dropdown menu.
- **City Name:** Choose the city name from the dropdown menu.
- **Status:** Choose the status from the dropdown menu.

4)	After completing the required details, click **Save**.   ![](/img/products/q-admin/295.png)

- A **"Added city “city name" successfully"** message appears in the upper-right corner. You are then redirected back to the **City Master** page.    ![](/img/products/q-admin/296.png)

### 1.15.1	Managing Cities:
**Search Field:** 
1)	Enter information into the**search field** to quickly locate a specific **City**.    ![](/img/products/q-admin/297.png)

**Date Filter Option:**

2)	This feature allows you to view City within a specific date range. Click the **calendar icon**, select a start date, then an end date, and click the Search button. To clear the date filter, click the blue **X** icon.    ![](/img/products/q-admin/298.png)

### 1.15.2	Cities Management action:
**Edit:** 
1)	To modify the city, locate the desired city and click the **edit icon** next to its entry.   ![](/img/products/q-admin/299.png)

- The **Edit City Details** page opens.  ![](/img/products/q-admin/300.png)

2)	Make your required edits and click **Update**.   ![](/img/products/q-admin/301.png)

- An **"Update City “City Name” successfully"** message appears in the upper-right corner. You are then redirected back to the City Master page.   ![](/img/products/q-admin/302.png)
