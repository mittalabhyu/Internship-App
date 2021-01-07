# -*- coding: utf-8 -*-
"""
Created on Thu Dec 10 20:40:09 2020

@author: HP
"""
import time
from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains
import os
try:
    #driver = webdriver.Chrome(r'path\chromedriver.exe')
    path=os.path.abspath(os.getcwd())
    driver = webdriver.Chrome(path+'\chromedriver.exe')
    driver.implicitly_wait(20)
    print("PATH OF CHROME DRIVER READ SUCCESSFULLY")
except:
    print("ERROR IN READING PATH OF DRIVER")
try:
    #driver.get("https://comunev.com")
    driver.get("https://ec2-13-232-133-35.ap-south-1.compute.amazonaws.com/")
    driver.maximize_window()
    driver.find_element_by_css_selector("#details-button").click()
    driver.find_element_by_css_selector("#proceed-link").click()
    print("SUCCESSFULLY CONNECTED TO WEBSITE")
except:
    print("ERROR IN CONNECTING TO WEBSITE")
##############      LOGIN   #############################################################
try:                  
    driver.find_element_by_link_text("Login").click()
    driver.implicitly_wait(10)
    driver.find_element_by_css_selector("#mat-input-0").send_keys("queue@stack")
    driver.find_element_by_css_selector("#mat-input-1").send_keys("123456")
    time.sleep(3)
    driver.find_element_by_xpath("//button[@type='submit']").click()
    time.sleep(5)
    print("SUCCESSFULLY LOGGED IN")
except:
    print("ERROR IN LOGIN")
########     ABOUT US ########################################################################
try:
    driver.find_element_by_link_text("About Us").click()
    time.sleep(5)
    print("SUCCESSFULLY RUN ABOUT US")
except:
    print("ERROR IN ABOUT US ")
#######     CONTACT US #######################################################################
try:
    driver.find_element_by_link_text("Contact Us").click()
    driver.find_element_by_css_selector("#mat-input-2").send_keys("abc")
    driver.find_element_by_css_selector("#mat-input-3").send_keys("xyz@gmail.com")
    driver.find_element_by_css_selector("#mat-input-4").send_keys("1122334455")
    driver.find_element_by_css_selector("#mat-input-5").send_keys("hello how are you")
    driver.find_element_by_xpath("//button[@type='submit']").click()
    time.sleep(3)
    driver.switch_to.alert.accept()
    driver.implicitly_wait(5)
    print("SUCCESSFULLY RUN CONTACT US PAGE")
except:
    print("ERROR IN CONTACT US")
############## CONNECTIONS##############################################
try:
    driver.find_element_by_link_text("Connections").click()
    time.sleep(3)
    driver.find_elements_by_xpath("//*[@class='mat-button-wrapper']")[0].click()
    time.sleep(2)
    driver.switch_to.alert.accept()
    print("SUCCESSFULLY RUN CONNECT WITH US PAGE")
except:
    print("ERROR IN CONNECT WITH US PAGE")
################      EVENTS#################################################
try:
    driver.find_element_by_link_text("Events").click()
    time.sleep(3)
    driver.find_elements_by_xpath("//*[@class='sec-button']")[0].click()
    time.sleep(2)
    print("SUCCESSFULLY RUN EVENTS PAGE")
except:
    print("ERROR IN EVENTS PAGE")
######################## CHAT#####################################################
try:
    driver.find_element_by_xpath("//*[@class='arrow up ng-star-inserted']").click()
    time.sleep(2)
    driver.implicitly_wait(5)
    driver.find_elements_by_xpath("//*[@class='btn btn-success button innerbutton ng-star-inserted']")[0].click()
    driver.find_element_by_css_selector("#textInput").send_keys("Automation Testing")
    time.sleep(2)
    driver.find_element_by_css_selector("#send").click()
    time.sleep(2)
    driver.find_elements_by_xpath("//*[@class='mat-icon notranslate material-icons mat-icon-no-color']")[0].click()
    driver.find_element_by_xpath("//*[@class='arrow down ng-star-inserted']").click()
    time.sleep(2)
    print("SUCCESSFULLY RUN CHAT")
except:
    print("ERROR IN CHAT")
############# LOGOUT#################################################################
try:
    driver.find_element_by_link_text("Logout").click()
    driver.implicitly_wait(5)
    time.sleep(2)
    driver.switch_to.alert.accept()
    print("SUCCESSFULLY LOGGED OUT")
except:
    print("ERROR IN LOGGING OUT")
#######   HOME  ##########################################################################
try:
    driver.find_element_by_link_text("Home").click()
    time.sleep(2)
    print("SUCCESSFULLY MOVED TO HOME PAGE")
except:
    print("ERROR IN MOVING TO HOME PAGE")
########################     about us#########################################################
try:
    driver.find_element_by_link_text("About Us").click()
    time.sleep(2)
    print("SUCCESSFULLY RUN ABOUT US PAGE AFTER LOGOUT")
except:
    print("ERROR IN ABOUT US PAGE AFTER LOGOUT")
########################     contact us ########################################################
try:
    driver.find_element_by_link_text("Contact Us").click()
    driver.implicitly_wait(10)
    driver.find_element_by_xpath("//div/div/div/input").click()
    driver.find_element_by_xpath("//div/div/div/input").send_keys("vaishalisingh")
    driver.find_element_by_xpath("//mat-form-field[2]/div/div/div/input").send_keys("abc@gmail.com")
    driver.find_element_by_xpath("//mat-form-field[3]/div/div/div/input").send_keys("8888899999")
    driver.find_element_by_xpath("//mat-form-field[4]/div/div/div/input").send_keys("abcfvgbhjnxtcfygvuzxdcfgvbhj")
    driver.find_element_by_css_selector(".btn-warning").click()
    time.sleep(2)
    driver.switch_to.alert.accept()
    print("SUCCESSFULLY RUN CONTACT US AFTER LOGOUT")
except:
    print("ERROR IN CONTACT US AFTER LOGOUT")
########################     become a speaker ###################################################
try:
    driver.find_element_by_link_text("Become a speaker").click()
    time.sleep(1)
    driver.find_element_by_xpath("//div/div/div/input").send_keys("Vaishali Singh")
    driver.find_element_by_xpath("//mat-form-field[2]/div/div/div/input").send_keys("abc@gmail.com")
    driver.find_element_by_xpath("//mat-form-field[3]/div/div/div/input").send_keys("8888899999")
    driver.find_element_by_xpath("//mat-form-field[4]/div/div/div/input").send_keys("Comunev is a great platform to communicate.")
    driver.find_element_by_css_selector(".btn").click()
    time.sleep(2)
    driver.switch_to.alert.accept()
    print("SUCCESSFULLY RUN BECOME A SPEAKER")
except:
    print("ERROR IN BECOME A SPEAKER")
########################     privacy-policy ########################################################
try:
    driver.find_element_by_link_text("Privacy-Policy").click()
    time.sleep(2)
    print("SUCCESSFULLY RUN PRIVACY POLICY")
except:
    print("ERROR IN PRIVACY POLICY")
########################    sponsor us #############################################################
try:
    driver.find_element_by_link_text("Sponsor Us").click()
    time.sleep(1)
    driver.find_element_by_xpath("//div/div/div/input").send_keys("Anusha Singh")
    driver.find_element_by_xpath("//mat-form-field[2]/div/div/div/input").send_keys("anu@gmail.com")
    driver.find_element_by_xpath("//mat-form-field[4]/div/div/div/input").send_keys("8880099999")
    driver.find_element_by_xpath("//mat-form-field[3]/div/div/div/input").send_keys("Comunev is a great platform to communicate.")
    driver.find_element_by_css_selector(".btn").click()
    time.sleep(2)
    driver.switch_to.alert.accept()
    print("SUCCESSFULLY RUN SPONSOR US")
except:
    print("ERROR IN SPONSOR US")
########################     partner with us ###########################################
try:    
    driver.find_element_by_link_text("Partner with us").click()
    time.sleep(1)
    driver.find_element_by_xpath("//div/div/div/input").send_keys("Bhavana Singh")
    driver.find_element_by_xpath("//mat-form-field[2]/div/div/div/input").send_keys("acom@gmail.com")
    driver.find_element_by_xpath("//mat-form-field[3]/div/div/div/input").send_keys("8888800999")
    driver.find_element_by_xpath("//mat-form-field[4]/div/div/div/input").send_keys("Comunev is a great platform to communicate.")
    driver.find_element_by_css_selector(".btn").click()
    time.sleep(2)
    driver.switch_to.alert.accept()
    print("SUCCESSFULLY RUN PARTNER WITH US")
except:
    print("ERROR IN PARTNER WITH US")
########################     sign up ##########################################################
try:
    driver.find_element_by_link_text("Sign Up").click()
    time.sleep(2)
    driver.find_element_by_xpath("//form/div/input").send_keys("vaishali")
    driver.find_element_by_xpath("//form/div[2]/input").send_keys("singh")
    driver.find_element_by_xpath("//form/div[3]/input").send_keys("abc@gmail.com")
    driver.find_element_by_xpath("//form/div[4]/input").send_keys("a@gmail.com")
    driver.find_element_by_xpath("//form/div[5]/input").send_keys("8888899999")
    driver.find_element_by_xpath("//form/div[6]/input").send_keys("1234567890")
    driver.find_element_by_xpath("//form/div[7]/input").send_keys("1234567890")
    driver.find_element_by_xpath("//mat-select/div/div").click()
    driver.find_element_by_xpath("//mat-option[3]").click()
    driver.find_element_by_xpath("//mat-option[4]/mat-pseudo-checkbox").click()
    driver.find_element_by_xpath("//mat-option[5]/mat-pseudo-checkbox").click()
    actions = ActionChains(driver)
    actions.move_by_offset(50,70).click().perform()
    driver.find_element_by_xpath("//select").send_keys("India (+91")
    driver.find_element_by_xpath("//div[10]/input").send_keys("Jabalpur")
    driver.find_element_by_xpath("//button").click()
    time.sleep(2)
    driver.switch_to.alert.accept()
    time.sleep(2)
    print("SUCCESSFULLY RUN SIGN UP")
except:
    print("ERROR IN SIGN UP")
########################     we are hiring #############################################
try:    
    driver.find_element_by_link_text("We are Hiring").click()
    time.sleep(5)
    print("SUCCESSFULLY MOVED TO WE ARE HIRING PAGE")
    #driver.execute_script("window.history.go(-1)")
except:
    print("ERROR IN MOVING TO WE ARE HIRING PAGE")
